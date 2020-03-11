<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entities\Pessoa;

class PessoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = Pessoa::all();

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao consultar";
            
            return \response()->json($msg, 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = Pessoa::create($request->all());

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao cadastrar!";
            
            return \response()->json($msg, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $data = Pessoa::find($id);

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao consultar";
            
            return \response()->json($msg, 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $data = Pessoa::find($id);
            $data->update($request->all());

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao alterar";
            
            return \response()->json($msg, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = Pessoa::destroy($id);
            
            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao deletar";
            
            return \response()->json($msg, 500);
        }
    }
}
