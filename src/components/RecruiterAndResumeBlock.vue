<template>
  <div>
    <p>
      <font-awesome-icon icon="exclamation-circle" />
      <strong>FYI TO RECRUITERS:</strong> I am only interested in telecommute/remote work within the Greater Toronto Area. My consulting rate is
      <b>${{rate}} per hour</b>.  My resume is only available in HTML or PDF, no Word format is available.
    </p>
    <div class="center">
      <p>
        <a title="Archimedes Trajano Resume in HTML Format" class="waves-effect waves-light btn-large" href="assets/Archimedes%20Trajano.html">
          <font-awesome-icon :icon="['far', 'file-word']" :fixed-width="true" size="lg" /> HTML</a>
        <a title="Archimedes Trajano Resume in PDF format" class="waves-effect waves-light btn-large" href="assets/Archimedes%20Trajano.pdf">
          <font-awesome-icon :icon="['far', 'file-pdf']" :fixed-width="true" size="lg" /> PDF</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecruiterAndResumeBlock',
  data() {
    return {
      rate: 125
    }
  }
}
</script>
