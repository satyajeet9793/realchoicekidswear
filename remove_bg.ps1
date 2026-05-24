Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\logo.png")
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

# Simple tolerance based transparency
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -gt 240 -and $pixel.G -gt 240 -and $pixel.B -gt 240) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save("C:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
