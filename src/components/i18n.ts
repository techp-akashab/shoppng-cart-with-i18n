import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
/*
Italian (it) 🇮🇹
Russian (ru) 🇷🇺
Portuguese (pt) 🇵🇹
Japanese (ja) 🇯🇵
Spanish  (es) es
German  (de) de
Chinese (zh) 🇨🇳*/
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          home: "Home",
          product_tab: "Products",
          shop_best: "Shop for the best from ",
          loading: "Loading...",
          no_product:
            "No Product in the Cart. <shop_link>Shop for products</shop_link>",
          cart: "Cart",
          checkout: "Checkout",
          total_price: "Total Price",
          add_to_cart: "Add to Cart",
        },
      },
      hi: {
        translation: {
          home: "घर",
          product_tab: "उत्पाद",
          shop_best: "दुकान से सबसे अच्छा खरीदें",
          loading: "लोड हो रहा है...",
          no_product:
            "कार्ट में कोई उत्पाद नहीं। <shop_link>उत्पादों की खरीदारी करें</shop_link>",
          cart: "कार्ट",
          checkout: "चेकआउट",
          total_price: "कुल मूल्य",
          add_to_cart: "कार्ट में जोड़ें",
        },
      },
      fr: {
        translation: {
          home: "Maison",
          product_tab: "Produits",
          shop_best: "Achetez le meilleur de la boutique",
          loading: "Chargement...",
          no_product:
            "Aucun produit dans le panier. <shop_link>Achetez des produits</shop_link>",
          cart: "Panier",
          checkout: "Paiement",
          total_price: "Prix total",
          add_to_cart: "Ajouter au panier",
        },
      },
      de: {
        translation: {
          home: "Startseite",
          product_tab: "Produkte",
          shop_best: "Kaufen Sie das Beste von ",
          loading: "Laden...",
          no_product:
            "Kein Produkt im Warenkorb. <shop_link>Produkte einkaufen</shop_link>",
          cart: "Warenkorb",
          checkout: "Kasse",
          total_price: "Gesamtpreis",
          add_to_cart: "In den Warenkorb",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          product_tab: "Productos",
          shop_best: "Compra lo mejor de ",
          loading: "Cargando...",
          no_product:
            "No hay productos en el carrito. <shop_link>Comprar productos</shop_link>",
          cart: "Carrito",
          checkout: "Pagar",
          total_price: "Precio total",
          add_to_cart: "Añadir al carrito",
        },
      },
      it: {
        translation: {
          home: "Casa",
          product_tab: "Prodotti",
          shop_best: "Acquista il meglio da ",
          loading: "Caricamento...",
          no_product:
            "Nessun prodotto nel carrello. <shop_link>Acquista prodotti</shop_link>",
          cart: "Carrello",
          checkout: "Cassa",
          total_price: "Prezzo totale",
          add_to_cart: "Aggiungi al carrello",
        },
      },
      ru: {
        translation: {
          home: "Домой",
          product_tab: "Продукты",
          shop_best: "Покупайте лучшее в ",
          loading: "Загрузка...",
          no_product:
            "Нет товаров в корзине. <shop_link>Купить товары</shop_link>",
          cart: "Корзина",
          checkout: "Оформить заказ",
          total_price: "Общая сумма",
          add_to_cart: "Добавить в корзину",
        },
      },
      pt: {
        translation: {
          home: "Início",
          product_tab: "Produtos",
          shop_best: "Compre o melhor de ",
          loading: "Carregando...",
          no_product:
            "Nenhum produto no carrinho. <shop_link>Comprar produtos</shop_link>",
          cart: "Carrinho",
          checkout: "Finalizar compra",
          total_price: "Preço total",
          add_to_cart: "Adicionar ao carrinho",
        },
      },
      ja: {
        translation: {
          home: "ホーム",
          product_tab: "製品",
          shop_best: "最高のものを購入 ",
          loading: "読み込み中...",
          no_product:
            "カートに商品がありません。 <shop_link>商品を購入する</shop_link>",
          cart: "カート",
          checkout: "チェックアウト",
          total_price: "合計金額",
          add_to_cart: "カートに追加",
        },
      },
      zh: {
        translation: {
          home: "首页",
          product_tab: "产品",
          shop_best: "购买最好的产品 ",
          loading: "加载中...",
          no_product: "购物车中没有产品。 <shop_link>购买产品</shop_link>",
          cart: "购物车",
          checkout: "结账",
          total_price: "总价",
          add_to_cart: "加入购物车",
        },
      },
    },
  });

export default i18n;
