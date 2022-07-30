# Проектная работа. Курсы "Специалист". JS2.

### Задачи:
* :white_check_mark:Создать изображения (из thumb) в #gallery при помощи document.createElement и .appendChild; 
* :white_check_mark:Добавить обработчик нажатия .addEventListener насобытие click так, чтобы при нажатии 
                    на изображение срабатывал произвольный alert;
* :white_check_mark:Создать контейнер с идентификатором #imgBox и присоединить его к body. 
                    Внутри #imgBox должен быть создан элемент img с одноименным файлом из папки img;
* :white_check_mark:Добавить таймер, который плавно поменяет opacity до 0 у #imgBox и при завершении 
                    вызовет удаление элементов darkbox и imgBox;

**Комментарии по выполнению:**
Все задачи проектной работы выполнены самостоятельно, кроме добавления таймера.

### Самостоятельная работа в дополнении к задачам:
* Организовать файловую структуру проекта. Создать для JS и для CSS отдельные папки и файлы. Далее подключить их к проекту;
* При написании кода JS придерживаться структуры: 
  - объявить глобальные переменные;     
  - прописать массив;    
  - прописать функции;    
  - в конце кода пописать обработчик событий;    
  
* Изменить верстку, добавив два template: 1) для создания карточек; 2) для создания popup;
* При работе с template для карточек применить figure + figcaption
* При работе с массивом (images.forEach((item, index) ) объявить на вход дополнительно index, 
  по которому можно: 
  - присвоить каждому src свой alt; 
  - присвоенные значения из alt добавить в figcaption;
* При работе по присвоению значений для alt & figcaption отказаться от конструкции if ... else в пользу switch;
* При открытии popup переоформить figure + figcaption так, чтобы figcaption c текстом был внутри картинки.

#### Вопросы, на котороые не смог найти ответы:

- Хотел попробовать обратиться к папке в проекте, 
  где лежат картинки, чтобы сразу пройтись массивом по всем изображениям,
  но, как я понял, это возможно сделать только в среде node.js при подключении fs.
  И все-таки, может быть как это возможно реализовать без дополнительных модулей? 
  Вполне же возможен такой сценарий, что количество картинок всегда меняется..
- При самостоятельной работе, я хотел написать две отдельные функции openPopup/closePopup
  и для каждой функции добавить свой соответствующий обработчик, но когда я эти функции
  написал, при выполнении кода в консоле появлялась ошибка, поскольку обработчик закрытия popup
  (btnClosePopup.addEventListener) ссылается на пустую переменную btnClosePopup.
  Что я пробовал? Задекларировать эту переменную, как глобальныую через let и в функции открытия
  popup (когда будет склонирован template) присвоить ей значние. Тщетно. Если обработчик прописыватьъ
  отдельно от функции и переменная btnClosePopup будет оставаться пустой в начале кода, консоль будет
  выдавать ошибку. Сделал объединения в одну функцию (popup), как открытие, так и закрытие popup.
- сам popup нормально открывается и закрывается, НО сама по себе картинка у меня затемненная, поскольку
  находится под слоем div c class="darkbox" в стилях для которого я прописал z-index: 1, чтобы именно
  на это слой вешать обработчик события на закрытия. Так и не понял, как прописать стили, чтобы popup был
  точно таким же, как в самой проектной работе. Тут, конечно, вопрос больше к CSS, но тем ни менее, хотелось
  бы понять, где моя ошибка. По моей первоначальной задумке в самом template popup элемент figure c  id="figure
  должен был заменить div c id="imgBox", как это было изначально в проектной работе, но что-то явно я накуралис
  со стилями, а что, понять не могу;
- Прочитал дополнительно про создание popup и многие его создают в самой верстке с нулевым opacity, а в перспективе
  его отображают переключением соответствующего класса. Думаю, что в будущем, моя работа с popup будет
  встречаться довольно часто для создания каких-либо форм, модальных окон и т.п. 
  Вопрос, соответственно, какой вариант является оптимальным с точки зрения минимизации кода среди практикующих
  программистов?
 
 #### Задачи для дальнейшей работы над проектом:
 - Добавить анимацию к открытию и закрытию popup при помощи JS, так чтобы popup не только медленно появлялся или исчезал,
   но еще и двигался/крутился, например, чтобы он появлялся сверху экрана, а также "уплыва" вверх экрана при его
   закрытии.

