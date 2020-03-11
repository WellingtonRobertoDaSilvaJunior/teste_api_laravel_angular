<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePessoaCursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pessoa_cursos', function (Blueprint $table) {
            $table->bigIncrements('Matricula');
            $table->integer('CdPessoaId')->unsigned()->nullable(false);
            $table->integer('CdCursoId')->unsigned()->nullable(false);
            $table->foreign('CdPessoaId')->references('Id')->on('pessoas');
            $table->foreign('CdCursoId')->references('Id')->on('cursos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pessoa_cursos');
    }
}
