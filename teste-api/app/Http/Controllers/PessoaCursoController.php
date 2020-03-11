<?php

namespace App\Http\Controllers;

use App\Models\Entities\PessoaCurso;
use Illuminate\Http\Request;

class PessoaCursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = PessoaCurso::all();

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
            $data = PessoaCurso::create($request->all());

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao cadastrar";
            
            return \response()->json($msg, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($CdPessoaId)
    {
        try {
            $data = PessoaCurso::where('CdPessoaId', $CdPessoaId)->get();

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao consultar";
            
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
            $data = PessoaCurso::destroy($id);
            
            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao deletar";
            
            return \response()->json($msg, 500);
        }
    }
}
