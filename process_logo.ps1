Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Satyajeet\.gemini\antigravity\brain\45c17b02-3990-40b3-86ce-6a1017ed5b8b\media__1779014481413.png")
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        $avg = [math]::Round(($pixel.R + $pixel.G + $pixel.B) / 3)
        $alpha = 255 - $avg
        
        # Color the non-transparent pixels with Gold (#D4AF37 -> 212, 175, 55)
        $newColor = [System.Drawing.Color]::FromArgb($alpha, 212, 175, 55)
        $bmp.SetPixel($x, $y, $newColor)
    }
}

$bmp.Save("C:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\nav-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
