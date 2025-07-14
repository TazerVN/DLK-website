import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex justify-between items-center w-full rounded-lg rows-start-2 row-end-3">
      <div className="relative w-full">
        <div className="flex flex-col items-center h-full w-full justify-center">
          <div className="flex flex-col items-center justify-center h-full ">
            <div className="flex w-[100dvw] items-center justify-center">
              <div className="absolute w-[100dvw] h-[9rem] z-[-5] border-y-4 bg-background">
                <Image
                  src={"/asset/Canva-8.png"}
                  alt="Logo"
                  fill
                  quality={50}
                  placeholder="blur"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-[100rem] h-[30rem] z-[-5]">
                <Image
                  src={"/asset/dialogue.png"}
                  alt="Logo"
                  quality={50}
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              {/* title */}
              <h1 className="absolute title mb-10 text-foreground text-8xl font-extrabold z-10">
                Sơ Lược
              </h1>
            </div>
            <div className="absolute bottom-30 self-center w-[130rem] h-[74rem] backdrop-blur-sm border-foreground bg-background border-5 rounded-2xl overflow-hidden">
              <Image
                src="/asset/Canva-2.png"
                alt="Background image"
                fill
                quality={50}
                placeholder="blur"
                className="object-contain object-center opacity-50"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center content-center rounded-3xl">
              <h2 className="text-yellowground font-bold absolute top-160">{`"KHI LÒNG NGƯỜI MỤC RUỖNG, QUỶ DỮ KHÔNG CẦN ĐẾN BÓNG ĐÊM ĐỂ TRỖI DẬY..."`}</h2>
              <div className="flex items-center">
                <div className="relative inset-0 w-[60rem] h-[40rem]">
                  <Image
                    src={"/asset/5_Map.png"}
                    alt="Background image"
                    fill
                    quality={50}
                    placeholder="blur"
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col items-center justify-center place-items-start text-2xl p-20 w-[70rem] h-[80rem] z-10 gap-4">
                  <p className="items-center text-white justify-center content-center">
                    Vùng đất Linh Khư - nơi bốn phương từng được Tử Linh Thú
                    canh giữ, giờ đây rơi vào hỗn loạn. Con người bị tha hóa bởi
                    lòng tham, sự đố kỵ và nghi kỵ. Những Con Quỷ lặng lẽ gặm
                    nhấm linh hồn con người, nuôi dưỡng những Linh hồn khát máu
                    dần dần từ bên trong họ.
                  </p>
                  <p className="items-center text-white justify-center content-center text-wrap">
                    Giữa tuyệt vọng, một dị quỷ phản loạn đã đứng về phía loài
                    người, dùng Dương khí để phong ấn tà ác vào Tháp Bảo Thiên -
                    nhưng phong ấn chỉ là tạm thời...
                  </p>
                  <p className="items-center text-white justify-center content-center text-wrap">
                    Ngàn năm sau, khi tham vọng nổi dậy, tổ chức Dị Linh ôm mưu
                    phá bỏ phong ấn, mở cửa Linh Giới. Bạn - một trong những
                    người cuối cùng còn giữ ánh sáng trong tâm, liệu có thể cùng
                    đồng đội chiến đấu - lập mưu - trấn tà trong trận chiến sinh
                    tử cuối cùng?
                  </p>
                  <p className="items-center text-white justify-center content-center text-wrap">
                    Một thế giới lấy cảm hứng từ tín ngưỡng, truyền thuyết và
                    tâm linh từ khi trăn trở, vùng đất Linh Khư một lần nữa rơi
                    vào diệt vong.
                  </p>
                  <p className="items-center text-white justify-center content-center text-wrap">
                    Vì vua đương thời triệu tập những người diệt quỷ, thuật sĩ
                    và người còn giữ ánh sáng trong tâm để đi đến gốc rễ phong
                    ấn - bắt đầu hành trình cứu lấy Linh Khư lần cuối cùng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
