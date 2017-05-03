<template>
	<div class="main_content_w">
		
		index
		<button type="button" @click="cf()">触发</button>

    <x-button type="primary" @click.native="cf()">primary</x-button>

    <div id="my"></div>
		
	</div>
</template>

<style lang="less" scoped src="./index.less"></style>
<script src="./index.js"></script>


