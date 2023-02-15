## İşte React Redux'un temel kavramları:

- State (Durum): React uygulamalarının bileşenlerinin durumunu yönetmek için kullanılan verilerdir. State, uygulamanın çalışması sırasında değişebilir ve bu değişiklikler, bileşenin yeniden render edilmesine neden olabilir.

- Actions (Eylemler): State'in değiştirilmesi gerektiğinde, Redux tarafından kullanılan Actions adlı bir nesne oluşturulur. Bu eylemler, uygulama içinde gerçekleştirilecek olan değişikliklerin açıklamasını içerir. Örneğin, bir kullanıcının oturum açması veya bir öğenin sepete eklenmesi gibi.

- Reducers (Azaltıcılar): Eylemler, Reducers adı verilen fonksiyonlar tarafından yakalanır. Bu fonksiyonlar, mevcut state ve action'ı kullanarak yeni bir state üretir. Bu işlem, uygulamanın temel işlevselliğini sağlayan en önemli kısımdır.

- Store (Depo): Store, uygulamanın tüm state'ini içeren bir nesnedir. Store, uygulamanın farklı bileşenleri arasında state değişikliklerini yönetmek için kullanılır. Bu nedenle, Store, uygulamanın durumunun tek bir merkezi yerden kontrol edilmesini sağlar.

- Dispatch (Dağıtım): Bir action, Dispatch adlı bir fonksiyon aracılığıyla store'a gönderilir. Bu işlem, state'in değiştirilmesi için başlatıcıdır. Dispatch, uygulamanın farklı bileşenleri arasında state değişikliklerinin nasıl gerçekleştirileceğini kontrol eder.

- Connect (Bağlanma): Connect, React bileşenlerini Redux store'a bağlamak için kullanılan bir fonksiyondur. Bu, bileşenlerin mevcut state'e erişmesini ve Redux'daki değişikliklerin otomatik olarak yeniden render edilmesini sağlar.

## Redux ile bir state güncelleme adımlarını sırasıyla şöyle anlatabilirim:

1. Action Oluşturma: State'in güncellenmesi gerektiğinde, Redux tarafından kullanılan Actions adlı bir nesne oluşturulur. Bu nesne, store'a gönderilir ve store, yeni bir state oluşturmak için bu action nesnesini kullanır. Action'lar, uygulama içinde gerçekleştirilecek olan değişikliklerin açıklamasını içerir. Örneğin, bir kullanıcının oturum açması veya bir öğenin sepete eklenmesi gibi.

2. Reducer Oluşturma: Action'lar, Reducers adı verilen fonksiyonlar tarafından yakalanır. Bu fonksiyonlar, mevcut state ve action'ı kullanarak yeni bir state üretir. Bu işlem, uygulamanın temel işlevselliğini sağlayan en önemli kısımdır. Reducer fonksiyonları genellikle switch-case ifadeleri kullanır ve her durum için bir state döndürür.

3. Store Oluşturma: Store, uygulamanın tüm state'ini içeren bir nesnedir. Store, uygulamanın farklı bileşenleri arasında state değişikliklerini yönetmek için kullanılır. Bu nedenle, Store, uygulamanın durumunun tek bir merkezi yerden kontrol edilmesini sağlar. Store, reducer'larla birlikte oluşturulur ve initialState adı verilen bir varsayılan state ile başlatılır.

4. Dispatch Etme: Bir action, Dispatch adlı bir fonksiyon aracılığıyla store'a gönderilir. Bu işlem, state'in değiştirilmesi için başlatıcıdır. Dispatch, uygulamanın farklı bileşenleri arasında state değişikliklerinin nasıl gerçekleştirileceğini kontrol eder. Dispatch, store'a action gönderir ve store, reducer'ları çalıştırarak yeni bir state oluşturur.

5. Yeni State Oluşturma: Reducer, mevcut state ve action'ı kullanarak yeni bir state oluşturur. Yeni state, store tarafından güncellenir ve uygulama içinde kullanılabilecek yeni bir state haline gelir. Bu yeni state, uygulamanın farklı bileşenleri tarafından okunabilir.

6. State'in Yeniden Render Edilmesi: State değiştiğinde, React bileşenleri otomatik olarak yeniden render edilir. Bu sayede, kullanıcının son görüntüsü güncellenir ve güncel verilerle yeniden yaratılır. Bu, uygulamanın farklı bileşenleri arasında senkronizasyon sağlar ve son kullanıcıya daha iyi bir kullanıcı deneyimi sunar.