<template>
<main>
	<MainVisual/>
	<AboutUs/>
	<Games/>
	<Partner/>
	<BackToTop/>
</main>
</template>

<script>
import MainVisual from '../components/MainVisual.vue';
export default {
    name: "IndexPage",
    components: { MainVisual }
}
</script>
