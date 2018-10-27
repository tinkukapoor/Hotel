"""demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'^admin/',include(admin.site.urls)),
    url(r'^employ/',include('employee.urls')),
    url(r'^$', 'employee.views.main'),
    url(r'^Hotel/login/$', 'employee.views.login' ),
    url(r'^Hotel/logout/$', 'employee.views.logout'),
    url(r'^Hotel/auth/$', 'employee.views.auth_view'),
    url(r'^Hotel/loggedin/$', 'employee.views.loggedin'),
    url(r'^Hotel/invalid/$', 'employee.views.invalid_login'),
    url(r'^Hotel/register/$', 'employee.views.register_user'),
    url(r'^Hotel/register_success/$', 'employee.views.register_success'),
    url(r'^Hotel/aboutus/$', 'employee.views.aboutus'),
    url(r'^Hotel/cancel/$', 'employee.views.cancel'),
    url(r'^Hotel/services/$', 'employee.views.services'),
    url(r'^Hotel/informations/$', 'employee.views.information'),
    #url(r'^enquiry/$','demo.views.enquiry'),

]
