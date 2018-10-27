from django.conf.urls import url
from . import views

urlpatterns = [
    	url(r'^employee/$',views.employee_list, name='employee_list'),
	url(r'^employee/new$',views.employee_new, name='employee_new'),
	url(r'^employee/edit/(?P<pk>\d+)$',views.employee_update, name='employee_edit'),
	url(r'^employee/delete/(?P<pk>\d+)$',views.employee_delete, name='employee_delete'),
	url(r'^employee/view/(?P<pk>\d+)$',views.employee_view, name='employee_view'),
	]
