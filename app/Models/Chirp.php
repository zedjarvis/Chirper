<?php

namespace App\Models;

use App\Events\ChirpCreated;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chirp extends Model
{
  use HasUuids, HasFactory;

  protected $fillable = [
    'message',
  ];

  protected $dispatchesEvents = [
    'created' => ChirpCreated::class,
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }
}
