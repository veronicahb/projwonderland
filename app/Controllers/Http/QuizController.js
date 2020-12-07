'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Quiz = use("App/Models/Quiz")
/**
 * Resourceful controller for interacting with quizzes
 */
class QuizController {
  /**
   * Show a list of all quizzes.
   * GET quizzes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const qui = await Quiz.all()
    return persona
  }

  /**
   * Display a single quiz.
   * GET quizzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const qui = await Quiz.FindOrFail(params.id)
    return qui
  }
  
}

module.exports = QuizController
