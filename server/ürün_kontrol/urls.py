from django.urls import path
from . import views

urlpatterns = [
    path('', views.ürün_ekle),
    path('sepet', views.sepet_VERİAL),
    path('sepet-ekle', views.sepet_ekle),
    path('sepet/ürün-kaldır/<int:numara>', views.sepet_ürün_kaldır),
    path('sepet/ürün-artır/<int:numara>', views.sepet_Adet_artır),
    path('sepet/ürün-azalt/<int:numara>', views.sepet_Adet_azalt),
    path('sepet/ürün-adet-update/<int:numara>/<int:adet>', views.sepet_Adet_Update),
]