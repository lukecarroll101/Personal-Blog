from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import blogPost
from .serializers import blogPostSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getBlogPosts(request):
    blogposts = blogPost.objects.all()
    serializer = blogPostSerializer(blogposts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlogPost(request, pk):
    blogpost = blogPost.objects.get(id=pk)
    serializer = blogPostSerializer(blogpost, many=False)
    return Response(serializer.data)


