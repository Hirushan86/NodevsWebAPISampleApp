var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/hello", () =>
{
   return "hello from dotnet";
});

app.MapPost("/hello",(string name)=>{
    return $"hello {name}";
});

app.Run();

