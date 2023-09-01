<template>
	<div class="card">
		<!--
      $slots : slot 객체에 접근
      header 이 없을 경우 랜더링을 하지 않는 조건
    -->
		<div v-if="$slots.header" class="card-header">
			<slot name="header"></slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot></slot>
		</div>
		<div v-if="$slots.footer" class="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
