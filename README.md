try(mhartington Ionic Team) 

``` 
https://forum.ionicframework.com/t/issue-adding-ionic-native-plugin-to-ionic-v3-project/154064/10
```

when(In app.module)

```angular2
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'

@NgModule({
  providers: [
...
    FingerprintAIO,
...

  ]
})
```
error: 
```
index.js:92 Uncaught TypeError: Object(...) is not a function
```
