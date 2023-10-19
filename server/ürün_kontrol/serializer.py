from rest_framework import serializers
from . models import SepetÜrün, Ürün, Sepet

class ÜrünSerileştirici(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    productKod = serializers.IntegerField()
    productName = serializers.CharField(max_length = 170)
    imgUrl = serializers.CharField(max_length = 210)
    productInfo1 = serializers.CharField(max_length = 240)
    productInfo2 = serializers.CharField(max_length = 240)
    Fiyat = serializers.FloatField()
    degerlendirme = serializers.IntegerField()

    def create(öz, doğrulanmış_veriler):
        return Ürün.objects.create(**doğrulanmış_veriler)
    
    def update(öz, misal , doğrulanmış_veriler):
        misal.productKod = doğrulanmış_veriler.get('productKod', misal.productKod)
        misal.productName = doğrulanmış_veriler.get('productName', misal.productName)
        misal.imgUrl = doğrulanmış_veriler.get('imgUrl', misal.imgUrl)
        misal.productInfo1 = doğrulanmış_veriler.get('productInfo1', misal.productInfo1)
        misal.productInfo2 = doğrulanmış_veriler.get('productInfo2', misal.productInfo2)
        misal.Fiyat = doğrulanmış_veriler.get('Fiyat', misal.Fiyat)
        misal.degerlendirme = doğrulanmış_veriler.get('degerlendirme', misal.degerlendirme)
        misal.save()
        return misal
    
class SepetSerileştirici(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    ürünKodu = serializers.IntegerField()
    Adet = serializers.IntegerField()

    def create(öz, doğrulanmış_veriler):
        return Sepet.objects.create(**doğrulanmış_veriler)
    
    def update(öz, misal , doğrulanmış_veriler):
        misal.ürünKodu = doğrulanmış_veriler.get('ürünKodu', misal.ürünKodu)
        misal.Adet = doğrulanmış_veriler.get('Adet', misal.Adet)
        misal.save()
        return misal
    
class SepetÜrünSerileştirici(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    ürün = serializers.RelatedField(source = 'Ürün', read_only = True)
    Adet = serializers.IntegerField()

    def create(öz, doğrulanmış_veriler):
        return SepetÜrün.objects.create(**doğrulanmış_veriler)
    
    def update(öz, misal , doğrulanmış_veriler):
        misal.ürün = doğrulanmış_veriler.get('ürün', misal.ürün)
        misal.Adet = doğrulanmış_veriler.get('Adet', misal.Adet)
        misal.save()
        return misal
    
class SepetÜrünModelSerileştirici(serializers.ModelSerializer):
    ürün = ÜrünSerileştirici()

    class Meta:
        model = SepetÜrün
        fields = ['ürün', 'Adet']