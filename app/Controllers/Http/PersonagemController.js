'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Personagem = use("App/Models/Personagem")
/**
 * Resourceful controller for interacting with personagems
 */
class PersonagemController {
  /**
   * Show a list of all personagems.
   * GET personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const persona = await Personagem.all()
    return persona
  }


  /**
   * Create/save a new personagem.
   * POST personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dado = request.only(["idpersonagem", "nome", "idade", "ator", "sobre", "imagem"])
    const persona = await Personagem.create(dado)
    return persona
  }

  /**
   * Display a single personagem.
   * GET personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const persona = await Personagem.findOrFail(params.id)
    return persona
  }



  /**
   * Update personagem details.
   * PUT or PATCH personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const persona = await Personagem.findOrFail(params.id)
    const {idpersonagem, nome, idade, ator, sobre, imagem} = request.only(["idpersonagem", "nome", "idade", "ator", "sobre", "imagem"])
    persona.idpersonagem = idpersonagem
    persona.nome=nome
    persona.idade=idade 
    persona.ator=ator
    persona.sobre=sobre
    persona.imagem=imagem
    await persona.save()
    return persona
  }

  /**
   * Delete a personagem with id.
   * DELETE personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const persona = await Personagem.findOrFail(params.id)
    await persona.delete()
    
  }
}

module.exports = PersonagemController
