<template>
	<swiper class="banner" indicator-dots :autoplay="false" circular>
		<swiper-item v-for="item in pictures" :key="item.id">
			<image :src="item.url" @tap="onPreviewImage(item.url)" />
		</swiper-item>
	</swiper>

</template>

<script>
	export default {
		data() {
			return {
				title: '有点卡卡的aaa',
				// 轮播图
				pictures: [
					{ id: 1, url: 'https://sbcyk.online/cykblog/strange_smiley_with_no_background.webp' },
					{ id: 2, url: 'https://sbcyk.online/cykblog/strange_smiley_with_no_background_white.webp'}
				]
			}
		},
		onLoad() {
			this.fuck()
		},
		methods: {
			fuck () {
				console.log('xixixi fuuuuuuuuuuuuuuuk')
			},
			onPreviewImage(url) {
				// console.log(url)
				uni.previewImage({
					urls: this.pictures.map(item => item.url),
					current: url
				})
			}
		}
	}
</script>

<style>
	.banner {
		width: 750rpx;
		height: 750rpx;
	}
	.banner image {
		width: 750rpx;
		height: 750rpx;
	}
</style>
