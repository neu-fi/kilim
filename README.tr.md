# ETHGünü Neufi Workshop
> ETHGünü Devconnect 2023 Neufi Atölyesi

## Giriş
ETHGünü Neufi atölyesine hoş geldiniz. Oturumumuz, Ethereum akıllı sözleşmelerinin dinamik dünyasını keşfetmeye adanacak. Bu atölye, merkezi olmayan bilgi işlemenin konseptini akıllı sözleşme kullanarak deneyimlemeyi amaçlamaktadır. Bu workshop için hazırladığımız kolaboratif çizim oyununda yer alarak, akıllı sözleşmelerle etkileşimde bulunma, kendi akıllı sözleşmelerinizi oluşturma, test etme ve çalıştırma konusunda doğrudan deneyim kazanacaksınız. Eğer kendinizi teknik anlamda rahat hissediyorsanız, kendi motiflerinizi yaratmak için örnek akıllı sözleşmelerimizi değiştirebilirsiniz. Bu atölyede geliştirilen akıllı sözleşmelerlin diğer katılımcılarla da paylaşılıp kullanılmalarına olanak tanınmasını umuyoruz!

## Atölye Genel Bakışı
Oturumumuz, birlikte bir sanat eseri oluşturmayı hedeflediğimiz Kilim akıllı sözleşmesi etrafındadır. Kilim sözleşmesinde 132x82 boyutlarında bir dikdörtgen sistemde pikselleri değiştirerek bir sanat eseri oluşturulur. Bu pikseller başlangıçta beyazdır ve siyah veya beyaza ayarlanabilir.

Kilim sözleşmesiyle etkileşime geçerek tek bir pikseli değiştirebilir, bizim önceden hazırladığımız Motif sözleşmelerini kullanarak veya kendi Motif sözleşmelerinizi geliştirerek tek seferde birden çok pikseli değiştirebilirsiniz.

## Bu Atölyenin Amacı
Bu etkinliğin amacı, Ethereum üzerinde akıllı sözleşmeleri anlamak ve çalıştırmak için pratik bir yol olarak hizmet etmektir.

Bu atölyenin sonunda, sadece kolektif bir dijital piksel sanatına katkıda bulunmakla kalmayacak, aynı zamanda pratik uygulama yoluyla merkezi olmayan bilgi işlemeyi temel bir şekilde anlamış olacaksınız. Ethereum dünyasındaki bu yolculuğunuzda sizi rehberlik etmekten heyecan duyuyoruz ve dijital tuvalde yaratıcılığınızın açığa çıkmasını sabırsızlıkla bekliyoruz!

## Nasıl Katılabilirsiniz?
Bu atölyeye katılmak için üç ana yol öneriyoruz.

### A. Gitter Üzerinden Koordinasyon
Hepsi koordinasyonla ilgili. Tuval üzerinde ilginç bir sanat eseri görmek isteyip istemediğiniz ya da başkalarının ilginç bir şeyler basmak için serin sözleşmenizi kullanmasını isteyip istemediğiniz fark etmez, meslektaşlarınızla koordinasyon için Gitter sohbetini kullanın.

Gitter'daki ilgili kanallarda destek arayın, böylece herkes yardımcı olabilir.

### B. Web3 Cüzdan Etkileşimi (Bölüm 1)
Sözleşmeleri Sepolia ağına yerleştirdik. Sepolia testnet etherini workshop için hazırladığımız Hayrat'ı kullanarak edinebilir ve bilgisayarınız veya cep telefonunuzdan sözleşmelerle etkileşimde bulunabilirsiniz.

### C. Özel Akıllı Sözleşmeler Geliştirme (Bölüm 2 & 3)
Alternatif bir yaklaşım, piksel durumlarını değiştirmek için tuval sözleşmemizle etkileşimde bulunan yeni akıllı sözleşmelerin dağıtımını içerir. Bu yöntem için bazı örnek sözleşmeler hazırladık. Bu örnekleri olduğu gibi kullanmaktan çekinmeyin veya farklı işlevleri keşfetmek için değiştirin.


## Katılımcılara İpuçları
- **Yardım Alın**: Yardım için Gitter destek kanallarını kullanın.
- **Keşfedin ve Deney Yapın**: Gitpod ortamını deney yapmak için kullanın.
- **İşbirliği Yapın**: Daha zengin bir öğrenme deneyimi için diğer katılımcılarla etkileşime geçin.


## Katılım Yöntemleri
1. **Gitter Üzerinden Koordinasyon**: Koordinasyon ve destek için Gitter'ı kullanın.
2. **Web3 Cüzdan Etkileşimi**: Dağıtılmış sözleşmelerle Web3 cüzdanı ve Etherscan Sepolia kullanarak etkileşimde bulunun.
3. **Kendi Sözleşmeleriniz**: Kilim ile etkileşimde bulunacak yeni sözleşmeler oluşturun ve diğerleriyle paylaşın.

### Kilim ([Sepolia'da Görüntüle](https://sepolia.etherscan.io/address/0x984D21223E7b9328a862eD80BCe33e6B367Fa672#code))
Bu atölyenin merkez noktası. Bu sözleşme, beyaz pikseller ile dolu bir diktörtgen sistemin durumunu içerir.

Pikseller, pikselin koordinatları için `x` ve `y` değerlerini alan ve siyahı `true` ile temsil eden bir boolean durumu kullanarak siyah veya beyaza ayarlanabilir. Bu fonksiyonun nasıl çağrılacağına dair bir kısıtlama yoktur.

### Motif ([Sepolia'da Görüntüle](https://sepolia.etherscan.io/address/0xFb657C06BC677B7733161bdb95D496D29ACFaF85#code))
Bu, bir kilim sözleşmesinde birden fazla pikseli nasıl ayarlayacağınızı gösteren bir örnek sözleşmedir.

Bu sözleşmenin `veawe` fonksiyonu çağrıldığında, yukarıdaki kilim sözleşmesinde birden fazla pikseli günceller. Bu sözleşmedeki pranga deseni geleneksel olarak birliği ifade eder:
* https://www.kilim.com/kilim-wiki/kilim-motifs/fetter
* https://en.wikipedia.org/wiki/Kilim_motifs#Motifs

`Weave` fonksiyonu, bu sözleşmede sabitlenmiş desenin sol alt pikselinin `x` ve `y` koordinatlarını alır.

### Yatay Çizgi ([Sepolia'da Görüntüle](https://sepolia.etherscan.io/address/0x98Df415D516E359f276C518C3Dc7dd1340350ECd#code))
Bu, bir kilim sözleşmesinde bir algoritma takip ederek birden fazla pikseli nasıl ayarlayacağınızı gösteren bir örnek sözleşmedir.

`Draw` fonksiyonu `startX`, `endX`, `y` ve `state` parametrelerini alır. Bir çağrı üzerine, bu sözleşme `(startX, y)`'den `(endX, y)`'ye kadar olan pikselleri verilen boolean `state` için siyah veya beyaz olarak ayarlar.

## Bölüm 1: Etherscan Kullanarak

### Gereklilikler
- Bir Web3 cüzdanı (örneğin MetaMask)
- Sepolia test ağında biraz test Etheri. ([Hayrat](https://8080-chainflag-ethfaucet-aypvbiz70zz.ws-us106.gitpod.io/) kullanarak edinebilirsiniz)

### Özet

* https://sepolia.etherscan.io adresine gidin.
* Sözleşme adresini girin.
* "Contract" (Sözleşme) sekmesine gidin.
* Sözleşmenin doğrulandığından ve aşağıdaki alt sekmeleri gördüğünüzden emin olun:
    * Code
    * Read Contract
    * Write Contract
* Sözleşmede durum değişikliğine sebep olan fonksiyonlar "Write Contract" (Sözleşmeye Yaz) altında toplanır.
* Gördüyseniz, "Connect to Web3" (Web3'e Bağlan) butonuna tıklayın ve cüzdanınızı bağlayın.
* Cüzdanınızın bağlı olduğu ağın Sepolia olduğundan emin olun.
* Kullanmak istediğiniz fonksiyona tıklayın.
* Parametreleri ayarlayın ve "Write" butonuna basın.
* Cüzdanınıza gelen imza ve onay işlemlerini tamamlayın.


### Örnek Adımlar

Aşağıdaki talimatlar, `Kilim` üzerinde `setState` çağrısı yapmak içindir, ancak herhangi bir sözleşmeyle etkileşime benzer bir deneyimdir.

MetaMask gibi bir Web3 cüzdanı kullanarak, bir web tarayıcısı üzerinden Kilim sözleşmesiyle doğrudan etkileşimde bulunabilirsiniz. Bu yöntem, bir işlem aracılığıyla Kilim sözleşmesi üzerinde bir fonksiyon çalıştırılmasını içerir. Değiştirmek istediğiniz piksel koordinatlarını `(x, y)` belirleyebilir ve bu parametrelerle fonksiyonu çalıştırabilirsiniz.

#### Etherscan'i Sözleşme Etkileşimi İçin Kullanma

1. **Etherscan Üzerinde Sözleşmeyi Bulun**:
   - [Etherscan](https://sepolia.etherscan.io)'ın Sepolia versiyonuna gidin.
   - "Kilim" için sözleşme adresini arama çubuğuna girin ve sözleşmenin sayfasına gidin. (Kilim Sepolia adresi: 0x984D21223E7b9328a862eD80BCe33e6B367Fa672)

2. **Cüzdanınızı Bağlayın**:
   - Sözleşme sayfasında, “Write Contract” sekmesine tıklayın.
   - MetaMask veya diğer Web3 cüzdanlarınızı bağlamak için “Connect to Web3” (Web3'e Bağlan) seçeneğine tıklayın.

3. **Sözleşmeyle Etkileşimde Bulunun**:
   - Fonksiyonlar listesinde `setState` fonksiyonunu bulun.
   - İstediğiniz parametreleri girin:
     - `_x`: Kilim üzerindeki x koordinatı.
     - `_y`: Kilim üzerindeki y koordinatı.
     - `_state`: pikselin durumu (siyah için true, beyaz için false).
   - Fonksiyonu çalıştırmak için “Write” butonuna tıklayın.

4. **İşlemi Onaylayın**:
   - MetaMask popup'ı (veya diğer cüzdanlar için benzer bir uyarı) görünecek ve işlemi onaylamanızı isteyecektir.
   - İşlem detaylarını gözden geçirin ve onaylayın.
   - Sözleşmeye yazma (Write) işlemlerinin, işlem ücreti olarak az miktarda test ETH tüketeceğini unutmayın.

5. **İşlemi Doğrulayın**:
   - İşlem onaylandıktan sonra, Kilim'deki değişiklikleri görmek için Kilim arayüzüne geri dönebilirsiniz.
   - Alternatif olarak, blok numarası ve kullanılan gaz gibi detaylar için Etherscan'da işlem makbuzunu (transaction receipt/hash) kontrol edebilirsiniz.

Bu yöntemleri takip ederek, konfor seviyenize ve teknik uzmanlığınıza bağlı olarak "Kilim" akıllı sözleşmesiyle çeşitli şekillerde etkileşimde bulunabilirsiniz. Doğrudan geliştirme yapıyor, yeni bir sözleşme paylaşıyor ya da basitçe bir Web3 cüzdanı kullanıyor olun, her yöntem Ethereum akıllı sözleşmeleriyle etkileşimde bulunma konusunda benzersiz bir perspektif sunar.

## Bölüm 2: Kendi Sözleşmelerinizi Geliştirmek İçin Geliştirme Ortamı Kurulumu
Herkesin tutarlı bir geliştirme ortamına sahip olmasını sağlamak için [Gitpod](https://gitpod.io) kullanıyoruz. Bu konuda yeniyseniz endişelenmeyin; sadece bu adım adım talimatları takip edin.

**Pro-tip:** Eğer gerekli araçlara zaten sahipseniz, [GitHub reposunu](https://github.com/neu-fi/kilim) bilgisayarınıza da klonlayabilirsiniz. Başarılı bir şekilde kurulum yapabilirseniz, Bölüm 3'e geçebilirsiniz.

### Adım 1: Bir GitHub Hesabı Oluşturun
- **GitHub Nedir?** Geliştiricilerin kodlarını saklayıp yönettikleri bir platformdur.
- **Neden İhtiyacım Var?** Geliştirme ortamımız olan Gitpod'u kullanmak için bir GitHub hesabınızın olması gerekir.
- **Nasıl Yapılır?**
  1. [GitHub'ın web sitesine](https://github.com/) gidin.
  2. Bir hesap oluşturmak için talimatları takip edin.

### Adım 2: GitHub Hesabınızla Gitpod'a Giriş Yapın
- **Gitpod Nedir?** Atölyede kullanacağımız bulut tabanlı bir geliştirme ortamıdır.
- **Nasıl Giriş Yapılır?**
  1. [Gitpod'un web sitesini](https://www.gitpod.io/) ziyaret edin.
  2. “Login" (Giriş Yap) veya "Try for free” (Ücretsiz Dene) butonuna tıklayın ve "Continue with GitHub" (GitHub ile Devam Et) seçeneğini seçin.

### Adım 3: Atölye Reposunu Klonlayın
- **Klonlama Nedir?** Bu, atölye materyallerinin (sözleşme kodu, solidity araç zinciri, betikler) bir kopyasını Gitpod ortamınıza oluşturacak ve kendi kod tabanınızın üzerinde çalışabileceksiniz.
- **Nasıl Klonlanır?**
  1. Gitpod'da iken, tarafımızdan sağlanan atölye Github reposu bağlantısını girin: https://github.com/neu-fi/kilim.
  2. Üzerine tıklayın ve Gitpod her şeyi sizin için ayarlayacak.

![gitpod2](https://hackmd.io/_uploads/SJcpsL6Q6.png)

### Adım 4: Gitpod'da Otomatik Kurulum
Gitpod'da atöyle reposunu açtığınızda, her şey otomatik olarak kurulur.
- **Yapmam gereken bir şey var mı?** Hayır, bitmesini bekleyin yeter. Bu sürede, kendi Kilim'iniz üzerinde yerel olarak test etmek için oluşturulan bir test blockchain ağında Kilim arayüzünü (Scaffold-ETH-2 kullanarak) kuracak.

### Adım 5: Ortamınızı Anlamak

Gitpod herhangi bir hata olmadan kurulumu tamamladığında, ekranınızın birden fazla pencereye bölündüğünü ve yerel geliştirme ortamınızın çalışmaya başladığını göreceksiniz.

![gitpod-post-setup](https://hackmd.io/_uploads/S1vxkvCm6.png)

**Pencere #1** yerel olarak çalıştırılan scaffold-eth-2 arayüzüne yönlendirilen uygulama içi web tarayıcısıdır.

**Pencere #2** yerel atölye kod tabanınızı sunan bir web sunucusunu çalıştıran bir terminal penceresidir.

**Pencere #3** yerel Kilim akıllı sözleşmenizi barındıran ve çalıştıran yerel bir test blockchain'i çalıştıran bir terminal penceresidir.

**Pencere #4** boşta olan kullanıma hazır bir terminal penceresidir ve sözleşme dağıtım komutunu çalıştırdıktan sonra kendi test blockchain ağınıza yüklenen akıllı sözleşmelerin adreslerini gösterir.

### Adım 6: Test Ortamınızı Kullanın
Kilim'i yerel ağınızda test etmek ve onu kurcalamak için, önce yerel test blockchain'inizde kullanılacak bir miktar test ETH'e ihtiyacınız olacak.

#### 1. Yerel Ağınızda Test ETH Elde Edin
İşlem ücretleri için bir miktar test ETH almak için basitçe "Connect Wallet" (Cüzdanı Bağla) butonuna tıklayın ve "Burner Wallet" (Yanıcı Cüzdan) seçeneğini seçin.

![gitpod6](https://hackmd.io/_uploads/Bykb-wC7a.png)

Ardından, bir miktar test ETH almak için görseldeki simgeye tıklayın. Başarılı olduğunda, cüzdan bakiyenizin arttığını göreceksiniz.

![gitpod7](https://hackmd.io/_uploads/r1OUbDCQp.png)

#### 2. Kilim'i Görüntüleyin
"Kilim" sayfasına gidin. İlk kurulumunuzda bu sayfa yerel test akıllı sözleşmenizi oluşturacaktır. Bu adımda, piksellerle doldurulmayı bekleyen boş bir Kilim göreceksiniz.

![gitpod8](https://hackmd.io/_uploads/SJmkGvCQ6.png)

#### 3. Test Kiliminiz Üzerinde Bir Motif Çizin

Gitpod ortamınızdaki Kilim sözleşmeniz üzerinde bir motif çizmek için şu adımları izleyin:

1. **Bir Motif Sözleşmesi Seçin:** Önceden yazılmış bir motif sözleşmesi seçin, örneğin 'Motif' veya 'Yatay Çizgi' sözleşmesi gibi, veya kendi sözleşmenizi oluşturun.
2. **Koordinatları ve Parametreleri Belirleyin:** Motifinizin sol alt pikseli için istediğiniz koordinatları (x, y) girin. Önceden yazılmış bir sözleşme kullanıyorsanız, bu koordinatlar motifin başlayacağı yeri belirleyecektir.
3. **Fonksiyonu Çalıştırın:** Gitpod ortamınızda sağlanan arayüzü kullanarak seçtiğiniz motif sözleşmesindeki "**weave**" veya benzer bir fonksiyonu çağırın. Bu, Kilim sözleşmesiyle etkileşime girecek ve motifinizi Kilim üzerine çizecektir.
4. **Sonucu Görüntüleyin:** İşlem onaylandıktan sonra, motifinizi görmek için Gitpod ortamınızdaki güncellenmiş Kilimi görüntüleyebilirsiniz.

## Bölüm 3: Özel Akıllı Sözleşmeler Geliştirme

### Ön Koşullar
- Akıllı sözleşme kurulumuna ilişkin temel anlayış.
- Ethereum geliştirme araçlarına aşinalık.

### Özet
1. **Ana sözleşmeyi anlayın:** `Kilim` sözleşmesini analiz edin, Kilimin durumunu nasıl yönettiğine odaklanın.
2. **Yeni bir sözleşme oluşturun:** `Kilim` ile etkileşimde bulunan yeni bir akıllı sözleşme yazın. Sözleşmeniz, örneğin, birden fazla pikseli aynı anda değiştirebilir veya önceden tanımlanmış desenler oluşturabilir.
3. **Kurulum betiğini yazın:** Atöyle kodlarındaki mevcut betikleri değiştirebilirsiniz.
4. **Yerel olarak test edin:** Yeni sözleşmenizi yükleyin ve onunla oynayın.
5. **Sepolia'ya Dağıtın:** Gitpod'daki Hardhat ortamını kullanarak yeni sözleşmenizi Sepolia test ağına yükleyin.
6. **Sepolia'da Etkileşimde Bulunun:** Sepolia'ya yüklendikten sonra, `Kilim` ile etkileşimde bulunmak için sözleşmenizi kullanın, böylece Kilim'in durumunu etkileyin.
7. **Sözleşmenizi Paylaşın:** İşinizle gurur duyuyorsanız, sözleşmenizi kullanmaları için diğer katılımcılarla adresini ve işlevselliğini, kullanımını Gitter üzerinden paylaşın.

### Adımlar

#### Yeni bir sözleşme oluşturun
`packages/hardhat/contracts` içinde, `YourContract.sol` gibi yeni bir dosya oluşturun. Kilim sözleşmesiyle etkileşimde bulunan örnek sözleşmelerimizden birini kopyalayıp yapıştırabilirsiniz. Bunlar `HorizontalLine.sol` ve `Motif.sol`'dur.

#### Dağıtım betiğini yazın
`packages/hardhat/deploy` içinde, `03_deploy_my_contract.ts` gibi yeni bir dosya oluşturun. Bu dosyalar numerik sırayla çalıştırıldığı için dosyanızın `03_` ile başlaması önemlidir.

Dağıtım betiğinizi `01_deploy_horizontal_line.ts` veya `02_deploy_motif.ts` örneklerindeki gibi yazın. İşte bir örnek dosya:

```
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMyContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const kilim = await hre.ethers.getContract("Kilim", deployer);

  await deploy("MyContract", {
    from: deployer,
    // Sözleşme yapıcı argümanları
    args: [kilim.address],
    log: true,
    autoMine: true,
  });
};

export default deployMyContract;
deployMyContract.tags = ["MyContract"];
```

#### Sepolia'ya Yükleyin
Aşağıdaki adımlar için Sepolia test ağındaki bir hesaba ihtiyacınız olacak. Özel anahtarınızı açığa çıkaracağınız için geliştirme için ayrı bir Ethereum hesabı kullanmanızı öneririz. MetaMask kullanıyorsanız, varsayılan olarak "Hesap 1" olan hesap adı menüsünden yeni bir hesap oluşturabilirsiniz.

MetaMask'ta, özel anahtarınızı yönergeleri takip ederek kopyalayabilirsiniz: https://support.metamask.io/hc/en-us/articles/360015289632

`packages/hardhat/.env` dosyasini olusturup icine private key'inizi yapistirin:

```
DEPLOYER_PRIVATE_KEY=yourWalletPrivateKey
```

Onceki dagitim betiginizdeki Kilim adresi yerine Sepolia'dakini koyun:
```
await deploy("MyContract", {
 from: deployer,
 args: ["0x984D21223E7b9328a862eD80BCe33e6B367Fa672"],
 log: true,
});
```

Ve son adim:
```
yarn deploy --network sepolia --tags MyContract
```

Deploy basarili ise adresini goreceksiniz.
```
deployed at 0xFb657C06BC677B.......db95D496D29ACFaF85
```

https://sepolia.etherscan.io adresinden kontrata bakabilirsiniz.

Simdi kontratin kaynak kodunu dogrulamak icin yukleyecegiz:
```
yarn verify --network sepolia
```

Eger "rate limit" alirsaniz yeni key almak icin yonergelere bakabilirsiniz:  https://docs.scaffoldeth.io/deploying/deploy-smart-contracts#configuration-of-third-party-services-for-production-grade-apps

#### Sepolia'da kullanma

Etherscan kullarak konratiniz ile etkilesebilirsiniz.

Eger calistirdiginiz nextjs uygulamasini kullanmak istiyorsaniz `packages/nextjs` klasorunde `.env.local`e su variable'i koyabilirsiniz:

```
NEXT_PUBLIC_EVM_NETWORK=Sepolia
```
