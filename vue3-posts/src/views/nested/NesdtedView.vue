<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<!-- 
          :to를 반응형으로 선언하여 replace: true로 사용하면 웹에 히스토리가 쌓이지 않음.
            (뒤로가기를 눌러도 건너뜀)
          input을 사용한 페이지를 건너 온 컴포넌트는 replace: true하면 좋을듯?!
        -->
				<router-link
					:to="{ name: 'NestedOne', replace: true }"
					class="nav-link"
					active-class="active"
				>
					Nested One
				</router-link>
				<router-link
					:to="{ name: 'NestedTwo', replace: true }"
					class="nav-link"
					active-class="active"
				>
					Nested Two
				</router-link>
			</li>
		</ul>
		<hr class="my-4" />
		<!-- 중첩 router 사용 -->
		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
