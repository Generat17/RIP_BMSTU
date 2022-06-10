from django.shortcuts import render
from datetime import date
from .models import Books
from .models import Product
from .models import Company
from django.http import HttpResponse


# def bookList(request):
#     return HttpResponse("BookList");
#
# def GetBook(request, id):
#     return HttpResponse("GetBook");

def bookList(request):
    return render(request, 'mydatabase/books.html', {'data' : {
        'current_date': date.today(),
        'books': Books.objects.all()
    }})

def GetBook(request, id):
    return render(request, 'mydatabase/book.html', {'data' : {
        'current_date': date.today(),
        'book': Books.objects.filter(id=id)[0]
    }})

def companyList(request):
    return render(request, 'mydatabase/companys.html', {'data' : {
        'current_date': date.today(),
        'companys': Company.objects.all()
    }})

def GetCompany(request, id):
    return render(request, 'mydatabase/company.html', {'data' : {
        'current_date': date.today(),
        'company': Company.objects.filter(id=id)[0]
    }})

def productList(request):
    return render(request, 'mydatabase/products.html', {'data' : {
        'current_date': date.today(),
        'products': Product.objects.all()
    }})

def GetProduct(request, id):
    return render(request, 'mydatabase/product.html', {'data' : {
        'current_date': date.today(),
        'product': Product.objects.filter(id=id)[0]
    }})