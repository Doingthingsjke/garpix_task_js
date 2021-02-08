import React from 'react'

import '../../styles/Coupons.css'
import imac from '../../logo/imac.svg'
import apple from '../../logo/apple.svg'

import AddressCard from '../../components/simples/AddressCard.js'

const Coupons = () => {
  const infos = [
    'Получите доступ к миллионам альбомов, исполнителей и песен',
    'Эксклюзивный и оригинальный контент',
    'Вы можете отказаться от подписки в любой момент',
    'Скачивайте любимую музыку и слушайте офлайн',
  ]
  const listItems = infos.map((info) => (
    <li>
      <span>{info}</span>
    </li>
  ))

  const instructions = [
    'Откройте приложение "Музыка" и введите существующий Apple ID и пароль для входа в учетную запись. (Если у вас нет Apple ID, вам будет предложено его создать).',
    'Нажмите на "3 месяца бесплатно" (специальное предложение для новых пользователей).',
    'Выберите индивидуальную подписку и нажмите "3 месяца бесплатно".',
    'Перейдите в учетную запись.',
    'Нажмите "использовать код".',
    'Введите 12-значный код.',
    'Получите сообщение с подтверждением использования кода.',
  ]
  const listItemTwo = instructions.map((instruction) => <li>{instruction}</li>)

  return (
    <div className="content_coupons">
      <div className="content_coupons--top">
        <button>Скидочные купоны</button>
        <div>&#8226;</div>
        <button>Развлечения</button>
      </div>

      <div className="content_coupons--title">Apple Music за СПАСИБО</div>

      <div className="content_coupons--body">
        <div className="content_coupons--body--background">
          <img src={imac} alt="" />
          <div className="content_coupons--body--info">
            <div className="content_coupons--body--info--title">
              C 17 Декабря 2018 г. по 17 Декабря 2019 г.
            </div>
            <div className="content_coupons--body--info--inst">
              <div className="content_coupons--body--info--first">
                <div>
                  Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и
                  наслаждайтесь любимой музыкой без перерыва.
                </div>
                <ul>{listItems}</ul>
              </div>
              <div className="content_coupons--body--info--second">
                <h4>Как использовать промо-код:</h4>
                <ol>{listItemTwo}</ol>
              </div>
              <div className="content_coupons--body--info--third">
                <div className="content_coupons--body--info--third--reg">
                  Под персональными данными в целях настоящих Правил понимаются
                  персональные данные Участников Акции и иных лиц - субъектов
                  персональных данных как они определены в Законе "О
                  персональных данных". Под обработкой персональных данных в
                  настоящих <b>Правилах понимается любое действие</b>{' '}
                  (операция), совершаемое в целях проведения Акции, или
                  совокупность действий (операций), совершаемых с использованием
                  средств автоматизации или без использования таких средств с
                  персональными данными, включая сбор, запись, систематизацию,
                  накопление, хранение, уточнение,(обновление, изменение),
                  извлечение, использование, передачу (распространение,
                  предоставление, доступ), обезличивание, блокирование,
                  удаление, уничтожение персональных данных, предоставленных
                  Участником Акции Банку/ Уполномоченной Компании.
                </div>
                <button>Подробнее об Apple Music для Android</button>
                <br></br>
                <button>Правила акции</button>

                <div className="content_coupons--body--info--third--ps">
                  <div>
                    Только при оформлении индивидуальной подписки. По окончании
                    пробного периода подписка будет продлена автоматически. 4
                    месяца бесплатно только для новых подписчиков. Срок действия
                    кода истекает 31 Января 2020 года. Это промокод, который не
                    подлежит перепродаже, обмену на денежный эквивалент и замене
                    в случае кражи или потери. Предложение действительно при
                    оформлении индивидуальную подписки на Apple Music на
                    территории Российской Федерации. Требуется учетная запись
                    iTunes. Применяются соответствующие условия{' '}
                    <a href="/">(подробнее)</a>.
                  </div>
                  <div>
                    Промокодом может воспользоваться лицо старше 13 лет, чье
                    местоположение совпадает со страной/регионом магазина, в
                    котором активируется код.
                  </div>
                  <div>
                    Требуются совместимые продукты и сервисы. Apple Music -
                    зарегестрированная торговая марка Apple. Apple не является
                    участником или спносором этой промоакции.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content_coupons--app">
        <img src={apple} alt=""></img>
        <div>Apple Music</div>
      </div>

      <div className="content_coupons--addresses">
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>

      <div className="content_coupons--map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4476513863106!2d37.625764177582525!3d55.768096744278466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a68edcd2c65%3A0x71d5676246c808aa!2z0JHQvtC70YzRiNC-0Lkg0KHQtdGA0LPQuNC10LLRgdC60LjQuSDQv9C10YAuLCDQnNC-0YHQutCy0LAsIDEwNzA0NQ!5e0!3m2!1sru!2sru!4v1612781768067!5m2!1sru!2sru"
          width="1200"
          height="380"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  )
}

export default Coupons
