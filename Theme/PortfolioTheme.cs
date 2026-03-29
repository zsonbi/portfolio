using MudBlazor;

namespace BlazorPortfolio.Theme;

public static class PortfolioTheme
{
    public static MudTheme Theme => new()
    {
        PaletteDark = new PaletteDark
        {
            Primary = "#5eead4",
            Secondary = "#2dd4bf",
            Background = "#0f172a",
            Surface = "#1e293b",
            AppbarBackground = "#0f172a",
            AppbarText = "#94a3b8",
            TextPrimary = "#94a3b8",
            TextSecondary = "#e2e8f0",
            DrawerBackground = "#0f172a",
            DrawerText = "#94a3b8",
            LinesDefault = "#334155",
            ActionDefault = "#94a3b8",
        },
        Typography = new Typography
        {
            Default = new DefaultTypography
            {
                FontFamily = ["Inter", "system-ui", "sans-serif"]
            }
        }
    };
}
