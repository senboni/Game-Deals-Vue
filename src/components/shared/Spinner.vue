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
	--spinner-height: 5rem;
	--spinner-width: 5rem;

	position: fixed;
	left: calc(50% - var(--spinner-width)/2);
	top: calc(50% - var(--spinner-height)/2);
}

.spinner,
.spinner:after {
	border-radius: 50%;
	height: var(--spinner-height);
	width: var(--spinner-width);
}

.spinner {
	border: 6px solid var(--clr-silver);
	border-left-color: var(--clr-purple);
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
