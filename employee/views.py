from django.shortcuts import render
from django.shortcuts import render,render_to_response, redirect, get_object_or_404
from django.http import HttpResponse
import datetime
#from django.views.generic import TemplateView,ListView
#from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.core.context_processors import csrf
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.contrib.auth.forms import UserCreationForm
from employee.models import employee

#from forms import EnquiryForm
# Create your views here.

class employeeForm(ModelForm):
    class Meta:
        model = employee
        fields = ['first_name','last_name','contact_no','address','department']

def employee_list(request, template_name='employee_list.html'):
    employees = employee.objects.all()
    data = {}
    data['object_list'] = employees
    return render(request, template_name, data)

def employee_new(request, template_name='employee_new.html'):
    form = employeeForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('employee_list')
    return render(request, template_name, {'form':form})

def employee_update(request, pk, template_name='employee_update.html'):
    emp = get_object_or_404(employee,pk=pk)
    form = employeeForm(request.POST or None, instance=emp)
    if form.is_valid():
        form.save()
        return redirect('employee_list')
    return render(request, template_name, {'form':form})

def employee_delete(request, pk, template_name='employee_delete.html'):
    emp = get_object_or_404(employee,pk=pk)    
    if request.method=='POST':
       	emp.delete()
        return redirect('employee_list')
    return render(request, template_name, {'object':emp})

def employee_view(request, pk, template_name='employee_detail.html'):
    emp= get_object_or_404(employee,pk=pk)    
    return render(request, template_name, {'object':emp})


def main(request):
    now = datetime.datetime.now()
    # html = "<html><body>It is now %s.</body></html>" % now
    # return HttpResponse(html)
    return render_to_response('index.html', RequestContext(request))
def Blog(request):
	render_to_response('')
def login(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('signin.html', c)

def loggedin(request):
    return render_to_response('loggedin.html', {'full_name': request.user.username})

def auth_view(request):
    if request.POST:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        print username
        print password
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request, user)
            return HttpResponseRedirect("/")
        else:

            return HttpResponseRedirect('/Hotel/invalid/')


def invalid_login(request):
    return render_to_response("invalid_login.html")


@login_required
def logout(request):
    auth.logout(request)
    # Redirect to a success page.
    return render_to_response("logout.html")

def register_user(request):
    if request.method =='POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/Hotel/register_success')
    args ={}
    args.update(csrf(request))
    args['form']= UserCreationForm()
    return render_to_response('register.html', args)


def register_success(request):
    return render_to_response("register_success.html")

def aboutus(request):
    return render_to_response("image.html")


def cancel(request):
    return render_to_response("cancel.html")

def services(request):
    return render_to_response("service.html")

def information(request):
    return render_to_response("information.html")


