/* eslint-env jquery */

$(function () {
  const $apiGwRegion = $('[name="api-gw-region"]')
  const $apiCalls = $('[name="api-calls"]')
  const $payload = $('[name="payload"]')
  const $freeTier = $('[name="freeTier"]')

  const $apiCallsCost = $('#api-calls-cost')
  const $payloadCost = $('#payload-cost')
  const $totalCost = $('#total-cost')

  function _round (x) { return Math.round(x * 1000) / 1000 }

  function renderCosts (costs) {
    $apiCallsCost.html(`$${_round(costs[0])}/month`)
    $payloadCost.html(`$${_round(costs[1])}/month`)
    $totalCost.html(`$${_round(costs[0] + costs[1])}/month`)
  }

  function updateCosts () {
    const region = parseInt($apiGwRegion.val())
    const apiCalls = parseInt($apiCalls.val())
    const payloadSize = parseInt($payload.val())
    const freeTier = $freeTier.prop('checked')

    if (!region || !apiCalls || !payloadSize) {
      renderCosts([0, 0])
      return
    }

    let regionCost
    switch (region) {
      case 1:
        regionCost = { apiCallPrice: 3.5, dataTransferPrice: 0.09 }
        break
      case 2:
        regionCost = { apiCallPrice: 3.7, dataTransferPrice: 0.09 }
        break
      case 3:
        regionCost = { apiCallPrice: 4.25, dataTransferPrice: 0.14 }
        break
      case 4:
        regionCost = { apiCallPrice: 3.5, dataTransferPrice: 0.09 }
        break
      default:
        break
    }

    const apiCallsCount = freeTier ? (apiCalls - 1000000) : apiCalls
    let apiCallsCosts = 0
    if (apiCallsCount > 0) {
      apiCallsCosts = (apiCallsCount / 1000000) * regionCost.apiCallPrice
    }

    const dataTransferInKb = apiCalls * payloadSize
    const dataTransferInGb = dataTransferInKb / 1048576
    const dataTransferCost = dataTransferInGb * regionCost.dataTransferPrice

    renderCosts([apiCallsCosts, dataTransferCost])
  }

  $apiGwRegion.on('change', updateCosts)
  $apiCalls.on('keyup', updateCosts)
  $apiCalls.on('change', updateCosts)
  $payload.on('keyup', updateCosts)
  $payload.on('change', updateCosts)
  $freeTier.on('change', updateCosts)
})
