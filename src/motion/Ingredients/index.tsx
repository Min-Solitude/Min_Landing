export interface ingredientProps {
  title: string
  content: string
  image: string
}

export const allIngredients = [
  {
    title: 'Nev Art',
    content:
      'Tạo ý tưởng nghệ thuật từ tìm kiếm dịch vụ của chúng tôi, theo dõi hiệu hình ảnh và nội dung . Nev khuyến khích các quyết định chu đáo đồng thời giúp bạn làm việc hiệu quả hơn.',
    image:
      'https://cdna.artstation.com/p/assets/images/images/005/590/942/4k/andreas-moritz-highresscreenshot00016.jpg?1492254434'
  },
  {
    title: 'Nev Music',
    content:
      'Hòa tan bản thân vào dịch vụ nghe nhạc của Nev. Sẽ giúp bạn trải nghiệm được âm hưởng cuộc sống. Khuyến khích bạn trải nghiệm dịch vụ này để có động lực fix bug. Hòa tan bản thân vào dịch vụ nghe nhạc của Nev. Sẽ giúp bạn trải nghiệm được âm hưởng cuộc sống. Khuyến khích bạn trải nghiệm dịch vụ này để có động lực fix bug.',
    image:
      'https://cdna.artstation.com/p/assets/images/images/005/598/384/4k/andreas-moritz-highresscreenshot00013.jpg?1492334307'
  },
  {
    title: 'Nev Movie',
    content:
      'Lạc lối vào thế giới phim ảnh không lối thoát của Nev.  Ảo giác kỹ thuật số từ nev sẽ khiến bạn đời hư ảo đưa em về cơn mê. Đến ngay nào. Lạc lối vào thế giới phim ảnh không lối thoát của Nev.  Ảo giác kỹ thuật số từ nev sẽ khiến bạn đời hư ảo đưa em về cơn mê. Đến ngay nào. ',
    image:
      'https://cdna.artstation.com/p/assets/images/images/005/598/320/4k/andreas-moritz-highresscreenshot00009.jpg?1492333890'
  },
  {
    title: 'Nev Dashboard',
    content:
      'Nghiên cứu là tất cả về chất lượng của dữ liệu và độ chính xác. Không giống như hầu hết các ứng dụng tài chính, các trang tài sản của chúng tôi được tuyển chọn cẩn thận để loại bỏ nhiễu, trong khi vẫn cho phép bạn truy cập vào thông tin thị trường phong phú chỉ bằng một lần nhấn phím',
    image:
      'https://cdna.artstation.com/p/assets/images/images/005/590/952/4k/andreas-moritz-highresscreenshot00010.jpg?1492254484'
  }
]

const [NevArt, NevMusic, NevMovie, NevDashboard] = allIngredients
export const initialTabs = [NevArt, NevMusic, NevMovie, NevDashboard]

const Ingredients = (ingredients: ingredientProps[]): ingredientProps | undefined => {
  const existing = new Set(ingredients)

  return allIngredients.find((ingredient) => !existing.has(ingredient))
}

export default Ingredients
