
# Create your models here.
from django.db import models

class Ürün(models.Model):
    productKod = models.IntegerField(unique = True, null = False)
    productName = models.CharField(max_length = 170)
    imgUrl = models.CharField(max_length = 210)
    productInfo1 = models.CharField(max_length = 240, default = '')
    productInfo2 = models.CharField(max_length = 240, default = '')
    Fiyat = models.FloatField()
    degerlendirme = models.IntegerField()

    def str(self):
        return f'Ürün Kodu: {self.productKod} Ürün Adı: {self.productName}'

class Sepet(models.Model):
    ürünKodu = models.IntegerField(unique = True, null = False)
    Adet = models.IntegerField()

    def str(self):
        return f'Ürün Kodu: {self.ürünKodu}'

class SepetÜrün(models.Model):
    ürün = models.ForeignKey(Ürün, default = '1', on_delete = models.CASCADE, related_name = 'ürünler')
    Adet = models.IntegerField()

    def str(self):
        return f'Ürün: {self.ürün.productKod}-{self.ürün.productName}, Adet: {self.Adet}'