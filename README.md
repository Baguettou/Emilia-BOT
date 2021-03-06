<div align="center">
    
# Emilia-BOT

<p align="center"> 
<H3>Este es un proyecto de código abierto, úsalo como quieras bajo tu responsabilidad y recuerda leer su  <a href="https://github.com/Baguettou/Emilia-BOT/blob/main/LICENCIA%20-%20LICENSE">licencia.</a></H3>
</p>
</div>

Texto de prueba (H3)</H3>
# ¿Qué necesito?:
* [Node.js](https://nodejs.org/es/).
* [Git](https://git-scm.com/downloads).
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/).
* [libwebp](https://developers.google.com/speed/webp/download).
* Cualquier editor de texto (recomiendo [NotePad++](https://notepad-plus-plus.org/downloads/)).

# ¿Cómo instalarlo?:
## 1. Clona este repositorio.
Escribe en GitCmd:
``` 
> git clone https://github.com/Baguettou/Emilia-BOT.git 
> cd Emilia-BOT
``` 

## 2. Edita los campos de información correspondientes en ```config.json```

```
{
    "ownerBot": "62812xxxxxxxx@c.us", 
    "prefix": "$",
    "uaOverride": "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "itech": "api-key",
    "nao": "api-key",
    "vhtear": "api-key",
    "melodic": "administrator",
    "tobz": "BotWeA",
    "lol": "api-key"
}
```

* ```ownerBot```: Tu número de WhatsApp.
* ```prefix```: El prefijo para usar el bot.
* ```uaOverride```: tu codigo de WhatsApp (algo así como el dispositivo virtual creado).
* ```itech```: I-Tech API key. La puedes obtener aquí despues de crear una cuenta. Después edita tu ip estática aquí.
* ```nao```: SauceNAO API key. La puedes obtener aquí despues de crear una cuenta.
* ```vhtear```: VHTear API key. La puedes obtener aquí despues de ***comprarla***.
* ```melodic```: MelodicXT API key. Usa la key de administrador.
* ```tobz```: Tobz API key. Puedes usar la BotWeA key.
* ```lol```: LolHuman API key. La puedes obtener aquí despues de crear una cuenta.

## 3. Instala FFmpeg
* Descarga una de las versiones disponibles  para tu sistema operativo usando [este link](https://www.gyan.dev/ffmpeg/builds/).
* Extrae el archivi en la carpeta `C:\`.
* Cambia el nombre a `ffmpeg`.
* Abre el símbolo del sistema como administrador.
* Usa este comando:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Te va a dar una respuesta como: `SUCCESS: specified value was saved`.
* Ahora ya instalado confirma que esté funcionando usando este comando que te mostrará la versión instalada:
```cmd
> ffmpeg -version
```

## 4. Instala libwebp
La instalación es la misma que la de FFmpeg, pero por si acaso.
* Descarga una de las versiones disponibles para tu sistema operativo usando [este link](https://developers.google.com/speed/webp/download).
* Extrae el archivi en la carpeta `C:\`.
* Cambia el nombre a `libwebp`.
* Abre el símbolo del sistema como administrador.
* Usa este comando:
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
Te va a dar una respuesta como: `SUCCESS: specified value was saved`.
* Ahora ya instalado confirma que esté funcionando usando este comando que te mostrará la versión instalada:
```cmd
> webpmux -version
```

## 5. Instala las dependencias (muy importante).
```cmd
> npm install
```

## 6. Encender el bot.
Node común:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js
> pm2 monit
```

PM2 con cron job (para que se reinicie cada 5 horas):
```cmd
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

## 6. Por último escanea el código QR con tu teléfono.
