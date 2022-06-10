from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('products/', views.products),
    path('companys/', views.companys),
    path('product/<int:id>/', views.product),
    path('company/<int:id>/', views.company),
]
