/* eslint-env jquery */

$(function () {
  function buildMemArr () {
    var res = [128]
    var last = res[0]
    while ((last + 64) < 3008) {
      last += 64
      res.push(last + 64)
    }
    return res
  }

  function addMem () {
    var arr = buildMemArr()
    var mapped = $.map(arr, function (item) {
      var opt = $('<option />')
      opt.attr({ 'value': item }).text(item + ' MB')
      return opt
    })
    $('#lambda-memory').append(mapped)
  }

  addMem()

  const $executions = $('[name="executions"]')
  const $memory = $('[name="memory"]')
  const $durations = $('[name="duration"]')
  const $freeTier = $('[name="freeTier"]')

  const $requestsCost = $('#requests-cost')
  const $executionsCost = $('#executions-cost')
  const $totalCost = $('#total-cost')

  function _round (x) { return Math.round(x * 1000) / 1000 }

  function renderCosts (costs) {
    //crude way of showing more than 2 decimals when the cost is below0.01
    if( _round(_round(costs[0])) <= 0.01 )
    $requestsCost.html(`$${_round(costs[0])}/month`)
    else
    $requestsCost.html(`$${_round(costs[0]).toFixed(2)}/month`)


    if( _round(_round(costs[1])) <= 0.01 )
    $executionsCost.html(`$${_round(costs[1])}/month`)
    else
    $executionsCost.html(`$${_round(costs[1]).toFixed(2)}/month`);


    if( _round(costs[0] + costs[1]) <= 0.01 )
    $totalCost.html(`$${_round(costs[0] + costs[1])}/month`)
    else
    $totalCost.html(`$${_round(costs[0] + costs[1]).toFixed(2)}/month`)
    
  }

  function updateCosts () {
    const executions = parseInt($executions.val())
    const memory = parseInt($memory.val())
    const averageDuration = parseInt($durations.val())
    const freeTier = $freeTier.prop('checked')

    if (!executions || !memory || !averageDuration) {
      renderCosts([0, 0])
      return
    }

    const executionsCount = freeTier ? (executions - 1000000) : executions
    let requestCosts = 0
    if (executionsCount > 0) {
      requestCosts = (executionsCount / 1000000) * 0.2
    }

    const computeSeconds = executions * (averageDuration / 1000)
    const computeGBS = computeSeconds * (memory / 1024)
    const totalCompute = freeTier ? (computeGBS - 400000) : computeGBS

    var executionCosts = 0

    if (totalCompute > 0) {
      executionCosts = totalCompute * 0.00001667
    }

    renderCosts([requestCosts, executionCosts])
  }

  $executions.on('keyup', updateCosts)
  $executions.on('change', updateCosts)
  $memory.on('change', updateCosts)
  $freeTier.on('change', updateCosts)
  $durations.on('keyup', updateCosts)
  $durations.on('change', updateCosts)
})
