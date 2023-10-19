from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from . serializer import SepetÜrünModelSerileştirici, SepetÜrünSerileştirici, ÜrünSerileştirici, SepetSerileştirici
from rest_framework import status as Durum
from rest_framework.response import Response as Cevap
from . models import SepetÜrün, Ürün

@api_view(['POST'])
def ürün_ekle(Talep):
    if Talep.method == 'POST':
        Serileştirici = ÜrünSerileştirici(data = Talep.data)
        if Serileştirici.is_valid():
            Serileştirici.save()
            return Cevap(Serileştirici.data, status=Durum.HTTP_201_CREATED)
        return Cevap(Serileştirici.errors, status=Durum.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def sepet_VERİAL(Talep):
    if Talep.method == 'GET':
        Sepet = SepetÜrün.objects.all()
        Serileştirici = SepetÜrünModelSerileştirici(Sepet, many = True)
        return Cevap(Serileştirici.data, status = Durum.HTTP_200_OK)



@api_view(['POST'])
def sepet_ekle(request):
    if request.method == 'POST':
        ürünKodu = request.data.get('ürünKodu')
        Adet = request.data.get('Adet')
            
        # Ürün koduyla mevcut ürünü sepetinizden alın
        try:
            if Ürün.objects.filter(productKod = ürünKodu):
                sepet_urun = SepetÜrün.objects.get(ürün__productKod=ürünKodu)
                # Mevcut ürünün 'Adet' değerini güncelleyin
                sepet_urun.Adet += Adet
                sepet_urun.save()
                return Cevap({'Cevap': 'Güncellendi'})
            else:
                return Cevap({'Hata': 'Böyle bir ürün bulunamadı üret olsun'}, status = Durum.HTTP_400_BAD_REQUEST)
        except SepetÜrün.DoesNotExist:
            # Eğer ürün sepetinizde yoksa, yeni bir ürün ekleyin
            ürün = Ürün.objects.get(productKod = ürünKodu)
            sepet = SepetÜrün(ürün =ürün, Adet = Adet)
            sepet.save()
            return Cevap({'Sepet' : sepet.Adet}, status=Durum.HTTP_201_CREATED)

@api_view(['PUT'])    
def sepet_Adet_artır(Talep, numara):
    if Talep.method == 'PUT':
        ürün = SepetÜrün.objects.get(ürün__productKod = numara)
        ürün.Adet = ürün.Adet + 1
        try:
            ürün.save()
            return Cevap({'Güncellendi': 'Adet Artırıldı'})
        except Exception as e:
            return Cevap([{'Yanıt' : 'Suçlu reco'}, e], status = Durum.HTTP_400_BAD_REQUEST)
        
@api_view(['PUT'])    
def sepet_Adet_Update(Talep, numara,adet):
    if Talep.method == 'PUT':
        ürün = SepetÜrün.objects.get(ürün__productKod = numara)
        ürün.Adet = adet
        try:
            ürün.save()
            return Cevap({'Güncellendi': 'Adet Artırıldı'})
        except Exception as e:
            return Cevap([{'Yanıt' : 'Suçlu reco'}, e], status = Durum.HTTP_400_BAD_REQUEST)
        
        
@api_view(['PUT'])    
def sepet_Adet_azalt(Talep, numara):
    if Talep.method == 'PUT':
        ürün = SepetÜrün.objects.get(ürün__productKod = numara)
        if ürün.Adet >= 0:
            ürün.Adet = ürün.Adet - 1
        else:
            return Cevap({'Yanıt' : 'Suçlu reco'}, status = Durum.HTTP_400_BAD_REQUEST)

        try:
            ürün.save()
            return Cevap({'Güncellendi': 'Adet Azaltıldı'})
        except Exception as e:
            return Cevap([{'Yanıt' : 'Suçlu reco'}, e], status = Durum.HTTP_400_BAD_REQUEST)
        
@api_view(['DELETE'])
def sepet_ürün_kaldır(Talep, numara):
    if Talep.method == 'DELETE':
        ürün = SepetÜrün.objects.get(ürün__productKod = numara)
        Serileştirici = SepetÜrünSerileştirici(ürün)
        try:
            ürün.delete()
            return Cevap([{'Silme İşlemi':'BAŞARILI'}, Serileştirici.data], status = Durum.HTTP_200_OK)
        except Exception as e :
            return Cevap(e, status = Durum.HTTP_204_NO_CONTENT)