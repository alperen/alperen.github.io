# repository of alperenturkoz.com
-----
This is repository of my personel resume. The repository serving with Google Firebase at alperenturkoz.com (might be you can't reach nowadays.)

### Also:
*I'm searching an internship these days for next the summer in İzmir, Turkiye.*

-----

For serve the repository, after cloning you shuould execute some commands. Firstly, you'll get the repository dependencies by execute: `yarn install` . The repository uses Gulp and Webpack. All CSS components written in SASS compiler, so you'll get final css (concated and minified) file by execute this command: `gulp`. This command also kind of watching your scss files which one providing `./scss/**/*.scss` glob.

There aren't any HTML files except `./public/index.html` in the repository beacuse all HTML side written in JSX. For change JSX files or watch them execute this command: `yarn webpack`. The repository uses React, MobX for React-DOM.

For serving repository on local execute: `firebase serve`. If you want it on internet (meaning Firebase), change `./firebase.json` by yourself and execute `firebase deploy`. For more information get refer Firebase Documentation. 

Also the repository supports Google Analytics, but for security these lines ignored.

----
This repository can using under MIT Lisence.
>Hiçbir ücret talep edilmeden burada işbu yazılımın bir kopyasını ve belgelendirme dosyalarını (“Yazılım”) elde eden herkese verilen izin; kullanma, kopyalama, değiştirme, birleştirme, yayımlama, dağıtma, alt lisanslama, ve/veya yazılımın kopyalarını satma eylemleri de dahil olmak üzere ve bununla kısıtlama olmaksızın, yazılımın sınırlama olmadan ticaretini yapmak için verilmiş olup, bunları yapmaları için yazılımın sağlandığı kişilere aşağıdakileri yapmak koşuluyla sunulur:

>Yukarıdaki telif hakkı bildirimi ve işbu izin bildirimi yazılımın tüm kopyalarına veya önemli parçalarına eklenmelidir. 

>YAZILIM “HİÇBİR DEĞİŞİKLİK YAPILMADAN” ESASINA BAĞLI OLARAK, TİCARETE ELVERİŞLİLİK, ÖZEL BİR AMACA UYGUNLUK VE İHLAL OLMAMASI DA DAHİL VE BUNUNLA KISITLI OLMAKSIZIN AÇIKÇA VEYA ÜSTÜ KAPALI OLARAK HİÇBİR TEMİNAT OLMAKSIZIN SUNULMUŞTUR. HİÇBİR KOŞULDA YAZARLAR VEYA TELİF HAKKI SAHİPLERİ HERHANGİ BİR İDDİAYA, HASARA VEYA DİĞER YÜKÜMLÜLÜKLERE KARŞI, YAZILIMLA VEYA KULLANIMLA VEYA YAZILIMIN BAŞKA BAĞLANTILARIYLA İLGİLİ, BUNLARDAN KAYNAKLANAN VE BUNLARIN SONUCU BİR SÖZLEŞME DAVASI, HAKSIZ FİİL VEYA DİĞER EYLEMLERDEN SORUMLU DEĞİLDİR.
----

