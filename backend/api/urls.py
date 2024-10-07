from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('blogposts/', views.getBlogPosts, name='BlogPosts'),
    path('blogposts/<str:pk>/', views.getBlogPost, name='BlogPost'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)