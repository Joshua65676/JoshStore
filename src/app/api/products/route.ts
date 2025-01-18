import { NextResponse } from "next/server";

         const productData = [
           {
            _id: 100,
            title: "Samba Shoes Green",
            description:
            "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
            oldPrice: 400.0,
            price: 309.99,
            brand: "Adidas Inc",
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
            isNew: true,
            category: "Fashion",
            soldOut: 4000,
            rating: 4.4,
          },
            {
              _id: 101,
              title: "Canon EOS Rebel T100",
              description:
                "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
              oldPrice: 700.0,
              price: 559.99,
              brand: "Canon",
              image: "https://i.ibb.co/1r28gMk/1.webp",
              isNew: true,
              category: "Electronics",
              soldOut: 3000,
              rating: 4.3,
            },
          
            {
              _id: 102,
              title: "DJI Air",
              description:
                "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
              oldPrice: 1050.0,
              price: 999.0,
              brand: "DJI",
              image: "https://i.ibb.co/qdfB3s6/2.webp",
              isNew: true,
              category: "Electronics",
              soldOut: 4000,
            rating: 4.4,
            },
            {
              _id: 103,
              title: "Apple 10.2-inch iPad",
              description:
                "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
              oldPrice: 329.0,
              price: 269.0,
              brand: "Apple",
              image: "https://i.ibb.co/VL1Dnv1/4.webp",
              isNew: true,
              category: "Electronics",
              soldOut: 2000,
            rating: 3.4,
            },
            {
              _id: 104,
              title: "iPhone 14",
              description: "AT&T iPhone 14 128GB Midnight",
              oldPrice: 1745.99,
              price: 1200.0,
              brand: "Apple",
              image: "https://i.ibb.co/5F3nWv6/7.webp",
              isNew: true,
              category: "Electronics",
              soldOut: 5000,
              rating: 4.4,
            },
            {
              _id: 105,
              title: "Apple Watch SE",
              description:
                "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
              oldPrice: 350.0,
              price: 249.0,
              brand: "Apple",
              image: "https://i.ibb.co/xgZWmdq/8.jpg",
              isNew: true,
              category: "Electronics",
              soldOut: 4000,
              rating: 4.4,
            },
            {
              _id: 106,
              title: "Beats Solo3",
              description:
                "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
              oldPrice: 120.99,
              price: 130.09,
              brand: "Beats by Dr. Dre",
              image: "https://i.ibb.co/rQKjVC2/5.webp",
              isNew: true,
              category: "Electronics",
              soldOut: 3000,
              rating: 3.0,
            },
            {
              _id: 107,
              title: "uhomepro TV Stand Cabinet",
              description:
                "uhomepro TV Stand Cabinet for Living Room up to 55 Television, Entertainment Center with RGB LED Lights and Storage Shelves Furniture, Black High Gloss TV Cabinet Console Table, Q15709",
              oldPrice: 219.99,
              price: 125.99,
              brand: "uhomepro",
              image: "https://i.ibb.co/Ycz8hkV/6.webp",
              isNew: true,
              category: "Home Decoration",
              soldOut: 2000,
              rating: 3.0,
            },
            {
              _id: 108,
              title: "Samba Shoes Green",
              description:
              "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 15.0,
              price: 18.99,
              brand: "Adidas Inc",
              image: 
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
              isNew: true,
              category: "Fashion",
              soldOut: 2000,
            rating: 3.4,
            },
            {
              _id: 109,
              title: "Picnic Table Bench Set",
              description:
                "Costway Picnic Table Bench Set Outdoor Backyard Patio Garden Party Dining All Weather Black",
              oldPrice: 169.99,
              price: 298.0,
              brand: "Costway",
              image: "https://i.ibb.co/qCXcPhq/8.webp",
              isNew: true,
              category: "Home Decoration",
              soldOut: 3000,
              rating: 4.0,
            },
            {
              _id: 110,
              title: "Grill Heavy Duty",
              description: "Expert Grill Heavy Duty 24-Inch Charcoal Grill, Black",
              oldPrice: 120.99,
              price: 107.0,
              brand: "Expert Grill",
              image: "https://i.ibb.co/TTS9wY4/9.webp",
              isNew: true,
              category: "Equipments",
              soldOut: 2000,
              rating: 3.0,
            },
            {
              _id: 111,
              title: "Favorites Backpack Turquoise",
              description:
              "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 20.0,
              price: 15.31,
              brand: "Adidas Inc",
              image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7220fd98945942b0a2ceafa50188fc5c_9366/Favorites_Backpack_Turquoise_HY3000_01_standard.jpg",
              isNew: true,
              category: "Fashion",
              soldOut: 2000,
              rating: 3.5,
            },
            {
              _id: 112,
              title: "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 12.99,
              price: 7.98,
              brand: "Olay",
              image: "https://i.ibb.co/zPDcCQY/top4.webp",
              isNew: true,
              category: "Beauty Product",
              soldOut: 2000,
            rating: 3.4,
            },
            {
              _id: 113,
              title: "Face LiquidSweet Lightweight Beauty Products for Women",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 9.59,
              price: 7.62,
              brand: "unknown",
              image: "https://i.ibb.co/QC4L3RF/top8.jpg",
              isNew: true,
              category: "Beauty Product",
              soldOut: 3000,
            rating: 4.1,
            },
            {
              _id: 114,
              title:
                "L'Oreal Paris Revitalift Triple Power Anti-Aging Cream Face Moisturizer 1.7 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 35.0,
              price: 21.91,
              brand: "L'Oreal Paris",
              image: "https://i.ibb.co/dKmw2sC/top2.webp",
              isNew: true,
              category: "Beauty Product",
              soldOut: 2000,
            rating: 3.4,
            },
            {
              _id: 115,
              title:
                "L'Oreal Paris 55+ Moisturizer Anti-Aging Face Moisturizer, Wrinkle Expert, 1.7 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 23.65,
              price: 10.63,
              brand: "L'Oreal Paris",
              image: "https://i.ibb.co/sJwg0YF/top1.webp",
              isNew: true,
              category: "Beauty Product",
              soldOut: 3000,
            rating: 4.4,
            },
            {
              _id: 116,
              title:
                "Vaseline Intensive Care™ Advanced Repair Unscented Body Lotion, 20.3 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 9.99,
              price: 6.98,
              brand: "Vaseline",
              image: "https://i.ibb.co/v1sPXLq/top5.webp",
              isNew: true,
              category: "Beauty Product",
              soldOut: 2000,
            rating: 2.4,
            },
            {
              _id: 117,
              title: "CeraVe Healing Ointment, Protects and Soothes Cracked Skin, 12 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 25.35,
              price: 20.87,
              brand: "CeraVe",
              image: "https://i.ibb.co/yPJjB3r/top6.webp",
              isNew: false,
              category: "Beauty Product",
              soldOut: 2000,
            rating: 3.4,
            },
            {
              _id: 118,
              title:
                "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Face Moisturizer, 1.7 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 29.0,
              price: 19.97,
              brand: "Neutrogena",
              image: "https://i.ibb.co/zmw8xFY/top7.webp",
              isNew: true,
              category: "Beauty Product",
              soldOut: 3000,
            rating: 3.4,
            },
            {
              _id: 119,
              title:
                "L'Oreal Paris Collagen Moisture Filler Facial Treatment Day Night Cream, Anti-Aging, 1.7 oz",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              oldPrice: 14.0,
              price: 8.98,
              brand: "L'Oreal Paris",
              image: "https://i.ibb.co/vHJkwzt/top3.webp",
              isNew: false,
              category: "Beauty Product",
              soldOut: 3000,
              rating: 3.5,
            },
            {
              _id: 120,
              title: "Superlite Hat Black",
              description:
              "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 52.0,
              price: 22.0,
              brand: "Adidas Inc",
              image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23092e0453ce4f8085c2ad47018102bb_9366/Superlite_Hat_Black_EX6700_01_standard.jpg",
              isNew: false,
              category: "Fashion",
              soldOut: 3000,
              rating: 4.0,
            },
            {
              _id: 121,
              title: "Stan Smith Crepe Shoes White",
              description:
              "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 62.0,
              price: 38,
              brand: "Adidas",
              image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584dcc48a1734ca4baf314572273e64e_9366/Stan_Smith_Crepe_Shoes_White_IG5531_01_standard.jpg",
              isNew: false,
              category: "Fashion",
              soldOut: 2000,
              rating: 4.0,
            },
            {
              _id: 122,
              title: "CUFFED POM Black",
              description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 52.0,
              price: 22,
              brand: "Adidas",
              image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/418d83e0c655438da814ad1d00eccd79_9366/CUFFED_POM_Black_GQ8103_01_standard.jpg",
              isNew: false,
              category: "Fashion",
              soldOut: 2000,
              rating: 4.0,
            },
            {
              _id: 123,
              title: "Training HIIT Backpack Grey",
              description:
              "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
              oldPrice: 52.0,
              price: 22.0,
              brand: "Adidas Inc",
              image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26c21c4b8bcb43d096caaf330079978b_9366/Designed_for_Training_HIIT_Backpack_Grey_HT2441_01_standard.jpg",
              isNew: false,
              category: "Fashion",
              soldOut: 2000,
              rating: 3.0,
            },
          ];

          export async function GET(request: Request) { 
            const url = new URL(request.url);
            const getAll = url.searchParams.get('all');
            const id = url.searchParams.get('id') ? Number(url.searchParams.get('id')) : null;


            if (getAll === 'true') {
              return NextResponse.json({ productData });
             } else if (id) {
               const product = productData.find(p => p._id === id);
                if (product) { 
                  return NextResponse.json(product);
                } else { 
                  return NextResponse.json({ message: 'Product not found' }, { status: 404 });
                 } 
                } else { 
                  const categories = new Set(productData.map(product => product.category)); 
                  const uniqueProducts = Array.from(categories).map(category => {
                     return productData.find(product => product.category === category);
                     }); 
                     return NextResponse.json({ productData: uniqueProducts }); 
                    }
}