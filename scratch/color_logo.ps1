Add-Type -AssemblyName System.Drawing

function Colorize-Logo($filePath, $r, $g, $b) {
    if (-not (Test-Path $filePath)) {
        Write-Host "File not found: $filePath"
        return
    }
    
    Write-Host "Processing $filePath ..."
    $img = [System.Drawing.Image]::FromFile($filePath)
    $bmp = New-Object System.Drawing.Bitmap($img)
    $img.Dispose()
    
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        for ($x = 0; $x -lt $bmp.Width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.A -gt 0) {
                # Replace with target color, keeping the original alpha channel
                $newColor = [System.Drawing.Color]::FromArgb($pixel.A, $r, $g, $b)
                $bmp.SetPixel($x, $y, $newColor)
            }
        }
    }
    
    # Save back to the file
    $tempPath = $filePath + ".tmp.png"
    $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    
    Remove-Item $filePath -Force
    Rename-Item $tempPath (Split-Path $filePath -Leaf) -Force
    Write-Host "Successfully colorized $filePath!"
}

# Colorize with Original Gold #D4AF37 (RGB: 212, 175, 55)
Colorize-Logo "c:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\nav-logo.png" 212 175 55
Colorize-Logo "c:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\logo-transparent.png" 212 175 55
Colorize-Logo "c:\Users\Satyajeet\.gemini\antigravity\scratch\real-choice\public\images\media__1778935967565.png" 212 175 55
