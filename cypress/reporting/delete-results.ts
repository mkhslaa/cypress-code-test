#!/usr/bin/env node
import rimraf from 'rimraf'

const testResultsDir = './cypress/test-results'

rimraf(testResultsDir, () => {
  console.log('Deleted former test results.')
})
