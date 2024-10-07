from django.db import models

# Create your models here.

def upload_to(instance, filename):
    return 'posts/{filename}'.format(filename=filename)

class blogPost(models.Model):
    title = models.TextField(null=True,blank=True)
    image = models.ImageField(null=True,blank=True,upload_to=upload_to)
    body = models.TextField(null=True,blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} - {self.body[0:20]}'
