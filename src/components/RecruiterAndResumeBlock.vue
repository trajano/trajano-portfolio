<template>
  <div>
    <p>
      <font-awesome-icon icon="exclamation-circle" />
      <strong>FYI TO RECRUITERS:</strong> I am only interested in telecommute/remote work within the Greater Toronto Area. My consulting rate is
      <b>${{rate}} per hour</b>.
    </p>
    <div class="center">
      <p>
        <a title="Archimedes Trajano Resume in Word Format" class="waves-effect waves-light btn-large" href="assets/Archimedes%20Trajano.docx">
          <font-awesome-icon :icon="['far', 'file-word']" :fixed-width="true" size="lg" /> Word</a>
        <a title="Archimedes Trajano Resume in PDF format" class="waves-effect waves-light btn-large" href="assets/Archimedes%20Trajano.pdf">
          <font-awesome-icon :icon="['far', 'file-pdf']" :fixed-width="true" size="lg" /> PDF</a>
        <a title="Archimedes Trajano Developer Story" class="waves-effect waves-light btn-large btn-primary" href="assets/Archimedes%20Trajano%20(DS).pdf">
          <font-awesome-icon :icon="['fab', 'stack-overflow']" :fixed-width="true" size="lg" /> Developer Story</a>
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
