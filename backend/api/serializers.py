from rest_framework.serializers import ModelSerializer
from.models import blogPost


class blogPostSerializer(ModelSerializer):
    class Meta:
        model = blogPost
        fields = '__all__'