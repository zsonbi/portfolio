namespace BlazorPortfolio.Models;

public record ProjectItem(string Name, string Description, string[] Tags, string? Link = null, string? Code = null);
