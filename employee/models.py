from django.db import models

# Create your models here.

class employee(models.Model):
	
	dept = (('IT', 'IT'),('Fnc', 'Finance'),('HR', 'Human Resource'),('Admin', 'Administration'),)
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	contact_no = models.BigIntegerField()
	address= models.TextField( max_length=150)
	department = models.CharField(max_length=10,choices=dept,default='IT')



class salary(models.Model):
	emp_id = models.ForeignKey(employee,on_delete=models.CASCADE)
	salary1 = models.IntegerField()
	tds=models.BooleanField()



class student(models.Model):
	f_name=models.CharField(max_length=30)
	l_name=models.CharField(max_length=30)
