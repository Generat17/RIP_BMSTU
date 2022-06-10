from django.urls import path
from . import views

urlpatterns = [
    path('', views.bookList),
    path('book/<int:id>/', views.GetBook, name='book_url'),
    path('company', views.companyList),
    path('company/<int:id>/', views.GetCompany, name='company_url'),
    path('product', views.productList),
    path('product/<int:id>/', views.GetProduct, name='product_url')
]
