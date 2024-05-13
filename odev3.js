// resimlerin değişmesini sağlar / fonksiyon 1 
function hediyeyiac(event) { // Resim ve yazıyı değiştirir (yazı resimle beraber olduğu için 2'sini de değiştirir)
    const image = event.currentTarget;
    const currentPhoto = image.parentElement; // Tıklanan resmin bulunduğu div
    const nextPhoto = currentPhoto.nextElementSibling; // Bir sonraki fotoğraf div'i

    if (nextPhoto) { // Bir sonraki fotoğraf varsa
        currentPhoto.classList.add('hidden'); // Şu anki fotoğrafı gizler
        nextPhoto.classList.remove('hidden'); // Bir sonraki fotoğrafı gösterir
    } else { // Bir sonraki fotoğraf yoksa, ilk fotoğrafı gösterir
        const firstPhoto = document.querySelector('.photo:first-child');
        currentPhoto.classList.add('hidden'); // Şu anki fotoğrafı gizler
        firstPhoto.classList.remove('hidden'); // İlk fotoğrafı gösterir
    }
}

const images = document.querySelectorAll('.photo img'); // Tüm fotoğraf resimlerini seçer
images.forEach(image => { // Her bir resim için tıklama olayını dinler
    image.addEventListener('click', hediyeyiac); // click olayını dinler
});

/* tıklanan resmin bulunduğu div elementini alır ve bir sonraki fotoğraf div'ini bulur,
eğer bir sonraki fotoğraf varsa, mevcut fotoğrafı gizler ve bir sonraki fotoğrafı gösterir 
ama bir sonraki fotoğraf yoksa, ilk fotoğrafı gösterir
.photo sınıfına sahip tüm fotoğraf resimlerini seçer ve her birine tıklama olayı ekler
her bir resme tıklandığında, hediyeyiac fonksiyonu çalışır */


// resimlerinin üzerine fare imleci getirildiğinde imlecin görünümünü bir el simgesi olarak değiştirmeyi sağlar / fonksiyon 2 
const image = document.querySelectorAll('.photo img');
image.forEach(image => {
    image.addEventListener('mouseenter', function() { // mouseenter olayını dinler
        this.style.cursor = 'pointer';
    });
});

  
// iletişim formunun kullanılmasını sağlar / fonksiyon 3 
document.addEventListener('DOMContentLoaded', function() { 
    const form = document.querySelector('.contactform form');

    form.addEventListener('submit', function(event) { // submit olayını dinler
        event.preventDefault(); // Formun varsayılan davranışını engeller (sayfanın yenilenmesini önler)

        const nameAndSurname = document.querySelector('#name-and-surname').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Formdaki verileri işleme örneği 
        console.log('İsim ve Soyad: ', nameAndSurname);
        console.log('E-posta: ', email);
        console.log('Mesaj: ', message);

        // Formun yeniden temizlenmesini sağlar
        form.reset();
    });
});

/* yukarıdaki fonksiyon, sayfa yüklendiğinde DOMContentLoaded olayını dinler,
bu olay; sayfanın DOM (Document Object Model) ağacının oluşturulduğunu ve tarayıcının sayfanın içeriğini tamamen yüklediğini gösterir
bu blok; iletişim formunun DOM'da bulunduğu contactform sınıfına sahip form elementini seçer ve devamında submit olayını dinler
form submit edildiğinde, tarayıcının varsayılan davranışını engellemek için preventDefault() yöntemi kullanılır
böylece, sayfanın yenilenmesi önlenir ve formun verileri JavaScript tarafından işlenebilir
sonrasında, formdaki name-and-surname, email ve message alanlarının değerleri alınır ve konsola yazdırılır
bu, formun nasıl kullanıldığını ve verilerin doğru şekilde alınıp alınmadığını kontrol etmek için bir örnektir
son olarak, reset() kullanılarak formun içindeki tüm alanlar temizlenir, böylece kullanıcı yeni bir mesaj gönderebilir. */

// iletişim formunun her kullanıldığında konsolda mesajın değiştiğini yazdırır / fonksiyon 4
document.getElementById('message').addEventListener('input', function() { // input olayını dinler
    console.log('Mesaj alanı değişti!');
});

const nameInput = document.querySelector('input[type="text"]#name-and-surname');
const emailInput = document.querySelector('input[type="email"]#email');
const messageTextarea = document.querySelector('textarea#message');


// iletişim formunun her kullanıldığında konsolda seçilen alana odaklandığını yazdırır / fonksiyon 5
function odaklan(element) {
    console.log(`${element.id} alanına odaklandı!`); // $ ile sırayla name-email-mesage kısmı döner
    element.style.backgroundColor = 'lavender'; // alanlar seçildiğindeki arka plan rengi
  }
    nameInput.addEventListener('focus', () => odaklan(nameInput)); // focus olayını dinler
    emailInput.addEventListener('focus', () => odaklan(emailInput));
    messageTextarea.addEventListener('focus', () => odaklan(messageTextarea));

    
// iletişim formunun her kullanıldığında konsolda seçilen alanın odağından çıkıldığını yazdırır / fonksiyon 6
function odagikes(element) {
    console.log(`${element.id} alanından odak kayboldu!`);
    element.style.backgroundColor = 'white'; // form geri yüklendiğindeki arka plan rengi
  }
    nameInput.addEventListener('blur', () => odagikes(nameInput)); // blur olayını dinler
    emailInput.addEventListener('blur', () => odagikes(emailInput));
    messageTextarea.addEventListener('blur', () => odagikes(messageTextarea));