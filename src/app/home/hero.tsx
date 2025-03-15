'use client';
import Service from '@/app/home/service';
import React from 'react';

const services = [
	{
		iconSrc: '/assets/images/service1.png',
		title: 'Chụp Ảnh Chân Dung & Cá Nhân',
		description:
			'Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất.',
	},
	{
		iconSrc: '/assets/images/service2.png',
		title: 'Chụp Ảnh Sự Kiện',
		description:
			'Quá trình xử lý ảnh thô sẽ được thực hiện chuyên nghiệp, đảm bảo chất lượng xuất trội. Đặc biệt, việc bàn giao ảnh trong thời hạn ưu tiên hàng đầu, mang đến sự hài lòng và tín tưởng tuyệt đối cho khách hàng.',
	},
	{
		iconSrc: '/assets/images/service3.png',
		title: 'Chụp Ảnh Sản Phẩm & Thương Mại',
		description:
			'Các concept được thiết kế phù hợp với thương hiệu, kỹ thuật chỉnh như và ánh sáng mạnh mẽ. Luôn sẵn sàng hỗ trợ với những cách chụp phù hợp, giúp tôn vẻ đẹp trừu tượng đặc trưng riêng của từng sản phẩm.',
	},
	{
		iconSrc: '/assets/images/service4.png',
		title: 'Chụp Ảnh Gia Đình & Couple',
		description:
			'Với bố cảnh đa dạng từ studio, ngoài cảnh đến chụp tại nhà, hạn chế có nhiều lựa chọn phù hợp với sở thích và phong cách. Đặc biệt, quá trình hậu kỳ được chỉnh sửa tỉnh tế, mang đến những bức ảnh chân thực nhất.',
	},
];

export default function HomeHere() {
	return (
		<div>
			<div className='relative w-full'>
				<div className="w-full h-[calc(100vw/2)] bg-[url('/assets/images/hero.png')] bg-cover bg-no-repeat">
					<div className='md:absolute md:top-[200px] md:right-[150px] md:w-[350px] lg:w-[450px] w-full p-4 md:p-0'>
						<div
							className='px-6 py-7 rounded-[20px] bg-cover bg-no-repeat'
							style={{
								backgroundImage: "url('/assets/images/hero-home-orange.png')",
							}}
						>
							<div className='text-center text-[20px] font-bold text-white'>
								Tham gia ngay để nhận ưu đãi khủng
							</div>
							<div className='text-center text-white text-[14px] mt-1'>
								Camnect cam kết rõ ràng, minh bạch về dịch vụ hỗ trợ khách hàng của mình.
							</div>
							<div className='mt-4'>
								<div className='mb-2'>
									<input className='w-full p-2 rounded-md text-sm' placeholder='Họ và tên' />
								</div>
								<div className='flex gap-2 mb-2'>
									<div className='w-1/2'>
										<input className='w-full p-2 rounded-md text-sm' placeholder='Nhập email' />
									</div>
									<div className='w-1/2'>
										<input
											className='w-full p-2 rounded-md text-sm'
											placeholder='Nhập số điện thoại'
										/>
									</div>
								</div>
								<div className='mb-4'>
									<textarea
										className='w-full p-2 rounded-md text-sm'
										rows={3}
										placeholder='Để lại lời nhắn cho chúng tôi'
									></textarea>
								</div>
								<div className='flex justify-center'>
									<button className='bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-2 px-8 rounded-md'>
										Gửi
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='py-16 px-4'>
				<div className='container-lg'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{services.map((service, index) => (
							<div key={index} className='mb-10 md:mb-0'>
								<Service
									iconSrc={service.iconSrc}
									title={service.title}
									description={service.description}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
