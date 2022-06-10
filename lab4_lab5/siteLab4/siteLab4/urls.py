from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('news/', include('news.urls')),
    path('mydatabase/', include('mydatabase.urls')),
] + static(settings.STATIC_URL, documet_root=settings.STATIC_ROOT)
