import { runtypeContract } from '@farfetched/runtypes';
import { Record, Number, String, Boolean, Union, Null, Array } from 'runtypes';

export const me = runtypeContract(
  Record({ 
    data: Record({
      id: Number,
      avatar: Union(String, Null),
      name: String,
      login: String,
      role_id: Number,
      status_id: Number,
      telegram_name: Union(String, Null),
      telegram_id: Union(String, Null),
      phone: Union(String, Null),
      phone_verified_at: Union(String, Null),
      code_generated_at: Union(String, Null),
      referal_id: Union(String, Null),
      referal_invited:String,
      show_welcome:Union(Boolean, Null),
      created_at:String,
      updated_at:String,
      active_queue:Number,
      wallet:Number,
      commission:Number,
      blocked:Union(Boolean, Null),
      blocked_message:Union(String, Null),
      count_avatars:Union(Number, Null),
      gift_pay:Number,
      test_result: Union(Boolean, Null),
      token_stacking: Number,
      token_vesting: Number,
      token_private: Number,
      is_active: Number,
      is_processed: Number,
      email: Union(String, Null),
      email_verified_at: Union(String, Null),
      security_question: Union(Array(String), Null),
      founder_status: Number,
      status: String,
      pools: Array(String)
    })
  }) 
);
  