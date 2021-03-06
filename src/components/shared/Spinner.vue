<template>
  <div class="spinner-container">
	  <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style>
.spinner-container {
	margin: 30vh auto;
}

.spinner,
.spinner:after {
	border-radius: 50%;
	width: 10em;
	height: 10em;
}
.spinner {
	margin: 0 auto;
	font-size: 0.5rem;
	position: relative;
	
	border: 6px solid var(--clr-dark__white);
	border-left-color: var(--clr-purple);

	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-webkit-animation: spin 1.3s infinite linear;
	transform: translateZ(0);

	animation: spin 1.3s infinite linear;
}

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
